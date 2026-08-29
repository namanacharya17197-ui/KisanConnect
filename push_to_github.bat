@echo off
title Push KisanConnect to GitHub
cd /d "%~dp0"
set GIT_PATH="C:\Users\This_PC\AppData\Local\GitHubDesktop\app-3.6.4\resources\app\git\cmd\git.exe"

echo ====================================================================
echo   Syncing and Pushing to https://github.com/namanacharya17197-ui/KisanConnect.git
echo ====================================================================
echo.

%GIT_PATH% branch -M main
%GIT_PATH% add .
%GIT_PATH% commit -m "update: Sync latest features, E-Commerce, Farmer Portal & Rate Announcer"
echo.
echo Pushing to GitHub (main branch)...
%GIT_PATH% push -u origin main

echo.
echo ====================================================================
echo   Finished!
echo ====================================================================
pause
