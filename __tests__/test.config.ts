import { existsSync, readFileSync } from "node:fs"

export let auth = {
	apiKey: "",
	insttoken: "",
}

const fname = `${__dirname}/config.json`

if (existsSync(fname)) {
	auth = JSON.parse(readFileSync(fname).toString())
}

if (process.env["ELSEVIER_API_KEY"] != undefined) {
	auth.apiKey = process.env["ELSEVIER_API_KEY"]
}
