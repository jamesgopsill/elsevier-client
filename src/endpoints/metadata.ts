import type {
	CitationCountResponse,
	CitationsOverviewResponse,
	ElsevierClient,
	NonSerialTitleResponse,
	SerialTitleQueryParams,
	SerialTitleResponse,
} from "../index.js"

/**
 * Abstract Citation Count API retrieves Cited by in Scopus image given one of the article identifiers (DOI, PII, pubmed_ID) passed in as query parameter. Optionally, an arbitrary combination of applicable ISSN, ISBN, volume, issue, title, page parameters can be provided to identify the article.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function citationCount(
	this: ElsevierClient,
	idType: "doi" | "pii" | "pubmed_id",
	id: string
) {
	const url = `${this._url}/abstract/citation-count`
	let params: any = {}
	params[idType] = id
	return this._fetch<CitationCountResponse.RootObject>("GET", url, params)
}

/**
 * Abstract Citation API allows to retrieve citations given one of the document identifiers (DOI, PII, scopus_id or pubmed_id).
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function citedBy(
	this: ElsevierClient,
	idType: "doi" | "pii" | "pubmed_id",
	id: string
) {
	const url = `${this._url}/abstract/citations`
	let params: any = {}
	params[idType] = id
	return this._fetch<CitationsOverviewResponse.RootObject>("GET", url, params)
}

/**
 * Nonserial Metadata API represents a search against the nonserial titles (Science Direct content).
 * @param this
 * @param title
 * @param isbn
 * @param subj
 * @returns
 */
export async function nonSerialTitle(
	this: ElsevierClient,
	title: string = "",
	isbn: string = "",
	subj: string = ""
) {
	const url = `${this._url}/nonserial/title`
	const params = {
		title,
		isbn,
		subj,
	}
	return this._fetch<NonSerialTitleResponse.RootObject>("GET", url, params)
}

/**
 * Single nonserial title (Science Direct content) identified by ISBN. Returns either the metadata for that title or the cover image.
 * @param this
 * @param isbn
 * @returns
 */
export async function nonSerialTitleByISBN(
	this: ElsevierClient,
	isbn: string = ""
) {
	const url = `${this._url}/nonserial/title/isbn/${isbn}`
	return this._fetch<NonSerialTitleResponse.RootObject>("GET", url)
}

/**
 * Serial Metadata API represents a search against the serial titles (Science Direct content).
 * @param this
 * @param query
 * @returns
 */
export async function serialTitle(
	this: ElsevierClient,
	query: SerialTitleQueryParams
) {
	const url = `${this._url}/serial/title`
	return this._fetch<SerialTitleResponse.RootObject>("GET", url, query)
}

/**
 * Single serial title (Science Direct content) identified by ISSN. Returns either the metadata for that title or the cover image.
 * @param this
 * @param issn
 * @returns
 */
export async function serialTitleByISSN(
	this: ElsevierClient,
	issn: string = ""
) {
	const url = `${this._url}/serial/title/issn/${issn}`
	return this._fetch<SerialTitleResponse.RootObject>("GET", url)
}
