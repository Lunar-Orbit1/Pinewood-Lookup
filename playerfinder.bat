@echo off
call npm install --silent

:startup
set /p "id=Enter Roblox USERNAME: "
call npm run start %id%
goto startup
```