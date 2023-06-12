const noblox = require('noblox.js')
const colors = require('colors');
const fs = require("fs");
const axios = require('axios');

const ranks = {}

function printGroup(text, rank) {
	if (rank !== "Guest") {
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

async function getgroupdata(user, player) {
	console.log("========================================================")
	console.log("A 'Guest' rank means they are not in the group".red)
	let userRanks;
	try {
		userRanks = await axios.get(`https://groups.roblox.com/v2/users/${user}/groups/roles`)
	} catch (err) {
		console.log(`ROBLOX: ${err}`.bold.brightRed)
		return
	}
	userRanks = userRanks.data.data

	//Get the ranks. There is a better way but I am lazy and don't care enough\
	// I cared enough to do it the better way
	//Control c + Control V my beloved
	//Pinewood
	ranks.pb = await getRank(159511, userRanks)
	printGroup(`Pinewood: ${ranks.pb}`, ranks.pb)

	//Pbst
	ranks.pbst = await getRank(645836, userRanks)
	printGroup(`PBST: ${ranks.pbst}`, ranks.pbst)

	//Tms
	ranks.tms = await getRank(4890641, userRanks)
	printGroup(`TMS: ${ranks.tms}`, ranks.tms)
	//Pet
	ranks.pet = await getRank(2593707, userRanks)
	printGroup(`PET: ${ranks.pet}`, ranks.pet)

	//PBQA
	ranks.pbqa = await getRank(4543796, userRanks)
	printGroup(`PBQA: ${ranks.pbqa}`, ranks.pbqa)

	//PBM
	ranks.pbm = await getRank(4032816, userRanks)
	printGroup(`PBM: ${ranks.pbm}`, ranks.pbm)

	//Xylem
	ranks.xylem = await getRank(1179443, userRanks)
	printGroup(`XYLEM: ${ranks.xylem}`, ranks.xylem)

	//PIA
	ranks.pia = await getRank(670202, userRanks)
	printGroup(`PIA: ${ranks.pia}`, ranks.pia)

	//PBV
	ranks.pbv = await getRank(240214, userRanks)
	printGroup(`PBV: ${ranks.pbv}`, ranks.pbv)
	console.log("========================================================")

	fs.writeFileSync(`./exports/${player}.json`, JSON.stringify(ranks, null, 2))
}


async function startApp() {
	const args = process.argv.slice(2);
	for (const player of args) {
		console.log(`Searching for ${player}..`.grey)
		try {

			let user = await noblox.getIdFromUsername(player)
			if (!user) {
				console.log(`User ${player} not found.`.red)
				return
			}
			console.log(`User ${user} found, \nProfile: https://www.roblox.com/users/${user}/profile`.green)
			await getgroupdata(user, player)
		} catch (err) {
			console.log(`NOBLOX: ${err}`.bold.brightRed)
		}
	}
	const directory = process.cwd() + `\\exports`
	console.log(`Done! You can find an export of the data in ${directory} `.green)
}
startApp()
