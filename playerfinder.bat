@echo off
call npm install --silent

:startup
set /p "id=Enter Roblox USERNAMES seperated by spaces: "
call npm run start %id%
goto startup
```