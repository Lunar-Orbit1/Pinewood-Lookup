const noblox = require('noblox.js')
var colors = require('colors');
var fs = require('fs');

var args = process.argv.slice(2);
const tokenPrefix = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_"
function write(token){
    var dta = {"token": token}
    fs.writeFile("./JAVASCRIPT/config.json", JSON.stringify(dta, null, 4), (err) => {
        if (err) {  console.error(err.red);  return; };
        console.log("200: Wrote to json successfully".green);
    });
}


async function startApp () {
    console.log("Logging in..".grey)
    try{
        const currentUser = await noblox.setCookie(tokenPrefix+args[0]) 
        console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`.green)
        console.log("Token is valid".green)
        console.log("========================================================")
        console.log("Writing to json..".grey)
        write(tokenPrefix+args[0])
    } catch(err){
        console.log("Error logging in. Make sure to validate the token".red)
    }
}
startApp()