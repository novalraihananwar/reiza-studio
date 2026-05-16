@echo off
title Reiza Studio - Demo Servers
echo =============================================
echo   Reiza Studio - Memulai Demo Servers
echo =============================================
echo.
echo Memulai POS Coffee Shop di port 3011...
start "Coffee Shop POS" cmd /k "cd /d "%~dp0..\rehan coffe eatery\rehan-cafe" && npm run dev -- --port 3011"

echo Memulai Website Properti di port 3012...
start "Rehan Properti" cmd /k "cd /d "%~dp0..\rehan properti" && npm run dev -- --port 3012"

echo.
echo =============================================
echo   Kedua server sedang starting...
echo   Tunggu ~15 detik lalu refresh browser.
echo.
echo   Coffee POS   : http://localhost:3011
echo   Properti     : http://localhost:3012
echo =============================================
echo.
pause
