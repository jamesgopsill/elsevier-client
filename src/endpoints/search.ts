import type {
	ElsevierClient,
	EngineeringVillageSearchQueryParams,
} from "../index.js"

export async function searchAffiliation(this: ElsevierClient, query: string) {
	const url = `${this._url}/search/affiliation`
	return this._fetch<unknown>("GET", url, { query })
}

export async function searchAuthor(this: ElsevierClient, query: string) {
	const url = `${this._url}/search/author`
	return this._fetch<unknown>("GET", url, { query })
}

export async function searchEngineeringVillage(
	this: ElsevierClient,
	query: EngineeringVillageSearchQueryParams
) {
	const url = `${this._url}/ev/results`
	return this._fetch<unknown>("GET", url, { query })
}
