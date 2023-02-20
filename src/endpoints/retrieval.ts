import type {
	AbstractRetrievalResponse,
	AuthorRetrievalResponse,
	ElsevierClient,
	EntitlementResponse,
} from "../index.js"

/**
 * Abstract retrieval exposes interfaces associated with Scopus Abstract API.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function abstract(
	this: ElsevierClient,
	idType: "doi" | "eid" | "pii" | "pubmed_id" | "pui" | "scopus_id",
	id: string
) {
	const url = `${this._url}/abstract/${idType}/${id}`
	return this._fetch<AbstractRetrievalResponse>("GET", url)
}

/**
 * Affiliation retrieval exposes interfaces associated with Scopus Affiliation Retrieval API.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function affiliation(
	this: ElsevierClient,
	idType: "affilifation_id" | "eid",
	id: string
) {
	const url = `${this._url}/affiliation/${idType}/${id}`
	return this._fetch<unknown>("GET", url)
}

/**
 * Article entitlement retrieval exposes interfaces associated with Article entitlement retrieval API. Multiple values can be submitted by including them as a comma-delimited list.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function articleEntitlement(
	this: ElsevierClient,
	idType: "doi" | "eid" | "pii" | "pubmed_id" | "scopus_id",
	id: string
) {
	const url = `${this._url}/article/entitlement/${idType}/${id}`
	return this._fetch<EntitlementResponse>("GET", url)
}

/**
 * Article retrieval exposes interfaces associated with Article Retrieval API.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function article(
	this: ElsevierClient,
	idType: "doi" | "eid" | "pii" | "pubmed_id",
	id: string
) {
	const url = `${this._url}/article/${idType}/${id}`
	return this._fetch<unknown>("GET", url)
}

/**
 * Author retrieval exposes interfaces associated with Scopus Author profile.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function author(
	this: ElsevierClient,
	idType: "eid" | "author_id",
	id: string
) {
	const url = `${this._url}/author/${idType}/${id}`
	return this._fetch<AuthorRetrievalResponse>("GET", url)
}

/**
 * This represents arecord retrieval from the Engineering Village databases.
 * @param this
 * @param docId
 * @returns
 */
export async function engineeringVillageRecord(
	this: ElsevierClient,
	docId: string
) {
	const url = `${this._url}/ev/records`
	return this._fetch<unknown>("GET", url, { docId })
}

/**
 * Object retrieval API to retrieve object references associated with a full text article.
 * @param this
 * @param idType
 * @param id
 * @returns
 */
export async function object(
	this: ElsevierClient,
	idType: "doi" | "eid" | "pii" | "pubmed_id" | "scopus_id",
	id: string
) {
	const url = `${this._url}/object/${idType}/${id}`
	return this._fetch<unknown>("GET", url)
}

/**
 * Object retrieval API to retrieve individual object or object metadata associated with a full text article.
 * @param this
 * @param idType
 * @param id
 * @param ref
 * @returns
 */
export async function objectRef(
	this: ElsevierClient,
	idType: "doi" | "pii" | "pubmed_id" | "scopus_id",
	id: string,
	ref: string
) {
	const url = `${this._url}/object/${idType}/${id}/ref/${ref}`
	return this._fetch<unknown>("GET", url)
}

/**
 * Object retrieval API to retrieve the image associated with a full text article.
 * @param this
 * @param idType
 * @param id
 * @param ref
 * @param quality
 * @returns
 */
export async function objectRefImage(
	this: ElsevierClient,
	idType: "doi" | "pii" | "pubmed_id" | "scopus_id",
	id: string,
	ref: string,
	quality: "high" | "standard" | "thumbnail"
) {
	const url = `${this._url}/object/${idType}/${id}/ref/${ref}/${quality}`
	return this._fetch<unknown>("GET", url)
}
