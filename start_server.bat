@echo off
title Kisan Setu Local Server
cd /d "%~dp0"
echo ========================================================
echo   Starting Kisan Setu Server at http://localhost:5173
echo ========================================================
echo.
python server.py
pause
