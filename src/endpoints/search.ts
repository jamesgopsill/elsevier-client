import type {
	ElsevierClient,
	EngineeringVillageSearchQueryParams,
	SearchAffiliationResponse,
	SearchAuthorResponse,
	SearchEngineeringVillageResponse,
	SearchScienceDirectResponse,
	SearchScopusResponse,
} from "../index.js"

/**
 * Affiliation search exposes interfaces associated with Scopus-based affiliation profiles.
 * @param this
 * @param query
 * @returns
 */
export async function searchAffiliation(this: ElsevierClient, query: string) {
	const url = `${this._url}/search/affiliation`
	return this._fetch<SearchAffiliationResponse.RootObject>("GET", url, {
		query,
	})
}

/**
 * Author search exposes interfaces associated with Scopus-based author profiles.
 * @param this
 * @param query
 * @returns
 */
export async function searchAuthor(this: ElsevierClient, query: string) {
	const url = `${this._url}/search/author`
	return this._fetch<SearchAuthorResponse.RootObject>("GET", url, { query })
}

/**
 * This represents an Expert Search against Engineering Village databases. Expert Search provides search power and flexibility by incorporating advanced Boolean logic and including a rich variety of options.
 * @param this
 * @param query
 * @returns
 */
export async function searchEngineeringVillage(
	this: ElsevierClient,
	query: EngineeringVillageSearchQueryParams
) {
	const url = `${this._url}/ev/results`
	return this._fetch<SearchEngineeringVillageResponse.RootObject>("GET", url, {
		query,
	})
}

/**
 * ScienceDirect search exposes interfaces associated with ScienceDirect search API.
 * @param this
 * @param query
 * @returns
 */
export async function searchScienceDirect(this: ElsevierClient, query: string) {
	const url = `${this._url}/search/sciencedirect`
	return this._fetch<SearchScienceDirectResponse.RootObject>("GET", url, {
		query,
	})
}

/**
 * Scopus search exposes interfaces associated with Scopus search API.
 * @param this
 * @param query
 * @returns
 */
export async function searchScopus(this: ElsevierClient, query: string) {
	const url = `${this._url}/search/scopus`
	return this._fetch<SearchScopusResponse.RootObject>("GET", url, { query })
}
