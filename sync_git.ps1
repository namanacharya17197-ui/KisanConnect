Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Syncing & Pushing to GitHub: KisanConnect" -ForegroundColor Cyan
Write-Host "  Repo: https://github.com/namanacharya17197-ui/KisanConnect.git" -ForegroundColor Gray
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

$git = "C:\Users\This_PC\AppData\Local\GitHubDesktop\app-3.6.4\resources\app\git\cmd\git.exe"

$code = @"
using System;
using System.Runtime.InteropServices;
using System.Text;

public class CredHelper {
    [DllImport("Advapi32.dll", SetLastError = true, EntryPoint = "CredReadW", CharSet = CharSet.Unicode)]
    public static extern bool CredRead(string target, int type, int reservedFlag, out IntPtr credentialPtr);

    [DllImport("Advapi32.dll", SetLastError = true, EntryPoint = "CredFree")]
    public static extern void CredFree(IntPtr credentialPtr);

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct CREDENTIAL {
        public int Flags;
        public int Type;
        public string TargetName;
        public string Comment;
        public long LastWritten;
        public int CredentialBlobSize;
        public IntPtr CredentialBlob;
        public int Persist;
        public int AttributeCount;
        public IntPtr Attributes;
        public string TargetAlias;
        public string UserName;
    }

    public static string GetPassword(string target) {
        IntPtr ptr;
        if (CredRead(target, 1, 0, out ptr)) {
            CREDENTIAL cred = (CREDENTIAL)Marshal.PtrToStructure(ptr, typeof(CREDENTIAL));
            byte[] bytes = new byte[cred.CredentialBlobSize];
            Marshal.Copy(cred.CredentialBlob, bytes, 0, cred.CredentialBlobSize);
            CredFree(ptr);
            return Encoding.UTF8.GetString(bytes);
        }
        return null;
    }
}
"@

if (-not ([System.Management.Automation.PSTypeName]'CredHelper').Type) {
    Add-Type -TypeDefinition $code -ErrorAction SilentlyContinue
}

$token = [CredHelper]::GetPassword("GitHub - https://api.github.com/namanacharya17197-ui")

& $git add .
$status = & $git status --porcelain
if ($status) {
    Write-Host "Committing local changes..." -ForegroundColor Yellow
    & $git commit -m "update: Automated sync of latest Kisan Setu updates"
} else {
    Write-Host "Working tree is clean, proceeding to push..." -ForegroundColor Green
}

if ($token) {
    $authUrl = "https://namanacharya17197-ui:$token@github.com/namanacharya17197-ui/KisanConnect.git"
    & $git remote set-url origin $authUrl
    Write-Host "Pushing commits to GitHub main branch..." -ForegroundColor Yellow
    & $git push -u origin main
    & $git remote set-url origin "https://github.com/namanacharya17197-ui/KisanConnect.git"
    Write-Host ""
    Write-Host "SUCCESS: All files and changes are now live on GitHub!" -ForegroundColor Green
} else {
    Write-Host "Pushing via standard credentials..." -ForegroundColor Yellow
    & $git push -u origin main
}
