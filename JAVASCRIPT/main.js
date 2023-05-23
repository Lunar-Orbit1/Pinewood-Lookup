const noblox = require('noblox.js')
const colors = require('colors');
const fs = require("fs");
const axios = require('axios');
let token //Assign after reading the JSON

function printGroup(text, rank){
    if (rank !== "Guest"){
        console.log(text.green)
    } else {
        console.log(text.red)
    }
}

const getRank = async function (group, user) {
	const rank = user.find(x => x.group.id === group)
	if (!rank) return 'Guest'
	return rank.role.name
}

async function getgroupdata(user){
    console.log("========================================================")
    console.log("A 'Guest' rank means they are not in the group".red)
    console.log("This could take a few seconds due to rate limits".italic.grey)

	let userRanks = await axios.get(`https://groups.roblox.com/v2/users/${user}/groups/roles`)
	userRanks = userRanks.data.data

    //Get the ranks. There is a better way but I am lazy and don't care enough
    //Control c + Control V my beloved
    //Pinewood
	let rankName = await getRank(159511, userRanks)
    printGroup(`Pinewood: ${rankName}`, rankName)

    //Pbst
    rankName = await getRank(645836, userRanks)
    printGroup(`PBST: ${rankName}`, rankName)

    //Tms
    rankName = await getRank(4890641, userRanks)
    printGroup(`TMS: ${rankName}`, rankName)

    //Pet
    rankName = await getRank(2593707, userRanks)
    printGroup(`PET: ${rankName}`, rankName)

    //PBQA
	rankName = await getRank(4543796, userRanks)
    printGroup(`PBQA: ${rankName}`, rankName)

    //PBM
	rankName = await getRank(4032816, userRanks)
    printGroup(`PBM: ${rankName}`, rankName)

    //Xylem
	rankName = await getRank(1179443, userRanks)
    printGroup(`XYLEM: ${rankName}`, rankName)

    //PIA
	rankName = await getRank(670202, userRanks)
    printGroup(`PIA: ${rankName}`, rankName)

    //PBV
	rankName = await getRank(240214, userRanks)
    printGroup(`PBV: ${rankName}`, rankName)
}


async function startApp () {
    const args = process.argv.slice(2);
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
