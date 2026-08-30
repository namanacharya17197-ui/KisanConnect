@echo off
title Kisan Setu Local Server Launcher
cd /d "%~dp0"
cls
echo =======================================================================
echo    🌾  KISAN SETU • SOVEREIGN AI AGRITECH & E-COMMERCE ECOSYSTEM  🌾
echo =======================================================================
echo.
echo  [1/2] Starting local web server on port 5173...
echo  [2/2] Launching application in your default browser...
echo.
echo  -----------------------------------------------------------------------
echo  Local URL:  http://localhost:5173
echo  Status:     LIVE & ACTIVE (Press Ctrl+C in this window to stop)
echo  -----------------------------------------------------------------------
echo.
start "" "http://localhost:5173"
python server.py
pause
