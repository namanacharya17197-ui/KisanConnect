@echo off
title KisanConnect GitHub Sync
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0sync_git.ps1"
pause
