import type { ElsevierClient, HttpResponse } from "./index.js"
import { parseDates } from "./parse-dates.js"

export async function fetchIt<T>(
	this: ElsevierClient,
	method: "GET",
	url: string,
	params: { [k: string]: any } = {}
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {
			Accept: "application/json",
		},
	}

	if (this._apiKey) params["apiKey"] = this._apiKey
	if (this._insttoken) params["insttoken"] = this._insttoken

	if (typeof params === "object") {
		url += "?"
		for (const [k, v] of Object.entries(params)) {
			url += k + "=" + v + "&"
		}
		url = url.slice(0, -1)
		url = encodeURI(url)
	}

	//console.log(url)

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.headers.get("Content-Type")?.includes("application/json")) {
		let content = await r.json()
		parseDates(content)
		r.content = content
	}
	return r
}
