@echo off
call npm install --silent
set /p "id=Enter Roblox USERNAME: "
node ./JAVASCRIPT/main.js %id%
pause