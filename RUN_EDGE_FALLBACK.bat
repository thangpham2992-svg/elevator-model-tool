@echo off
setlocal
cd /d "%~dp0"
REM Fallback: open directly (may still be blocked by browser file security on some machines)
start "" msedge "%~dp0index.html"
