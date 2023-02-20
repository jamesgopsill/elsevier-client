import * as Metadata from "./endpoints/metadata.js"
import * as Retrieval from "./endpoints/retrieval.js"
import * as Search from "./endpoints/search.js"
import { fetchIt } from "./fetch-it.js"

export * from "./definitions/enums.js"
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
	public searchAuthors = Search.searchAuthor
	public searchEngineeringVillage = Search.searchEngineeringVillage
	public searchScienceDirect = Search.searchScienceDirect
	public searchScopus = Search.searchScopus

	//Retrieval
	public abstract = Retrieval.abstract
	public affiliation = Retrieval.affiliation
	public articleEntitlement = Retrieval.articleEntitlement
	public article = Retrieval.article
	public author = Retrieval.author
	public engineeringVillageRecorc = Retrieval.engineeringVillageRecord
	public object = Retrieval.object
	public objectRef = Retrieval.objectRef
	public objectRefImage = Retrieval.objectRefImage

	// Metadata
	public citationCount = Metadata.citationCount
	public citedBy = Metadata.citedBy
	public nonSerialTitle = Metadata.nonSerialTitle
	public nonSerialTitleISBN = Metadata.nonSerialTitleByISBN
	public serialTitle = Metadata.serialTitle
	public serialTitleByISSN = Metadata.serialTitleByISSN
}
