@echo off
setlocal
cd /d "%~dp0"
REM Start a local server (port 8000) and open Edge to the tool automatically.
REM Requires Python (comes with many Windows installs; if missing, use RUN_EDGE_FALLBACK.bat)
start "" cmd /c "python -m http.server 8000"
timeout /t 1 >nul
start "" msedge "http://localhost:8000/index.html"
echo.
echo Server is running at http://localhost:8000/index.html
echo Close this window to stop (or close the python server window).
pause
