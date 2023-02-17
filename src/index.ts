import * as Search from "./endpoints/search.js"
import { fetchIt } from "./fetch-it.js"

export * from "./definitions/interfaces.js"

export class ElsevierClient {
	protected _url: string = "https://api.elsevier.com/content"
	protected _apiKey: string = ""
	protected _insttoken: string = ""
	protected _accessToken: string = ""

	constructor(apiKey: string = "", insttoken: string = "", accessToken = "") {
		this._apiKey = apiKey
		this._insttoken = insttoken
		this._accessToken = accessToken
	}

	protected _fetch = fetchIt

	public ping = () => "pong"

	// Search
	public searchAffiliations = Search.searchAffiliation
}
