const noblox = require('noblox.js')
var colors = require('colors');
const fs = require("fs");
var token //Assign after reading the JSON

function printGroup(text, rank){
    if (rank !== "Guest"){
        console.log(text.green)
    } else {
        console.log(text.red)
    }
}

async function getgroupdata(user){
    console.log("========================================================")
    console.log("A 'Guest' rank means they are not in the group".red)
    console.log("This could take a few seconds due to rate limits".italic.grey)

    //Get the ranks. There is a better way but I am lazy and don't care enough
    //Control c + Control V my beloved
    //Pinewood
    var rankName = await noblox.getRankNameInGroup(159511, user)
    printGroup(`Pinewood: ${rankName}`, rankName)

    //Pbst
    rankName = await noblox.getRankNameInGroup(645836, user)
    printGroup(`PBST: ${rankName}`, rankName)

    //Tms
    rankName = await noblox.getRankNameInGroup(4890641, user)
    printGroup(`TMS: ${rankName}`, rankName)

    //Pet
    rankName = await noblox.getRankNameInGroup(2593707, user)
    printGroup(`PET: ${rankName}`, rankName)

    //PBQA
    rankName = await noblox.getRankNameInGroup(4543796, user)
    printGroup(`PBQA: ${rankName}`, rankName)

    //PBM
    rankName = await noblox.getRankNameInGroup(4032816, user)
    printGroup(`PBM: ${rankName}`, rankName)

    //Xylem
    rankName = await noblox.getRankNameInGroup(1179443, user)
    printGroup(`XYLEM: ${rankName}`, rankName)

    //PIA
    rankName = await noblox.getRankNameInGroup(670202, user)
    printGroup(`PIA: ${rankName}`, rankName)

    //PBV
    rankName = await noblox.getRankNameInGroup(240214, user)
    printGroup(`PBV: ${rankName}`, rankName)
}


async function startApp () {
    //Read config.json, assign token
    console.log("Reading JSON".grey)
    try {
        const jsonString = fs.readFileSync("./JAVASCRIPT/config.json");
        token = JSON.parse(jsonString);
      } catch (err) {
        console.log(err.red);
        return;
      }
    console.log("Successfully read JSON".grey)
    console.log("Logging in..".grey)
    const currentUser = await noblox.setCookie(token['token']) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`.grey)
    var args = process.argv.slice(2);
    
    console.log(`Searching for ${args[0]}..`.grey)
    try{
        
        let user= await noblox.getIdFromUsername(args[0])
        console.log(`User ${user} found, \nProfile: https://www.roblox.com/users/${user}/profile`.green)
        getgroupdata(user)
    } catch(err){
        console.log(`NOBLOX: ${err}`.bold.brightRed)
    }
}
startApp()