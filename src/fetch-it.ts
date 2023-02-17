import type { ElsevierClient, HttpResponse } from "./index.js"
import { parseDates } from "./parse-dates.js"

export async function fetchIt<T>(
	this: ElsevierClient,
	method: "GET",
	url: string,
	params: { [k: string]: any } | undefined = undefined
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {},
	}

	if (this._apiKey) config.headers["X-ELS-APIKey"] = this._apiKey
	if (this._insttoken) config.headers["X-ELS-Insttoken"] = this._insttoken
	if (this._accessToken) config.headers["X-ELS-AccessToken"] = this._accessToken

	if (method === "GET" && typeof params === "object") {
		url += "?"
		for (const [k, v] of Object.entries(params)) {
			url += k + "=" + v + "&"
		}
		url = url.slice(0, -1)
		url = encodeURI(url)
	}

	console.log(config)

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type")?.includes("application/json")) {
			let content = await r.json()
			parseDates(content)
			r.content = content
		}
	}
	return r
}
