@echo off
set /p "id=Enter Roblox USERNAME: "
npm install
node ./JAVASCRIPT/main.js %id%
pause