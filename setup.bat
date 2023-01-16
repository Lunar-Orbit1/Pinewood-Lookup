@echo off
echo If you have not installed Node.js, Noblox.js, or colors please see the readme file
echo Please copy and paste your .ROBLOSECURITY code below. If you do not know how to get it, please read 'README.md'
set /p "id=Enter TOKEN (Remove the warning text): "
node ./JAVASCRIPT/setup.js %id%
pauseimage.png