import {
	ElsevierClient,
	EngineeringVillageSearchQueryParams,
} from "../src/index.js"
import { auth } from "./test.config.js"

let c: ElsevierClient

beforeAll(() => {
	c = new ElsevierClient(auth.apiKey)
})

test(`GET /search/affiliation`, async () => {
	const query = "affil(Bristol)"
	const r = await c.searchAffiliations(query)
	//console.log(r.status, r.statusText)
	//console.log(r.content)
	expect(r.status).toBe(401)
})

test(`GET /search/author`, async () => {
	const query = "authlast(Einstein)"
	const r = await c.searchAffiliations(query)
	//console.log(r.status, r.statusText)
	//console.log(r.content)
	expect(r.status).toBe(401)
})

test(`GET /search/ev/results`, async () => {
	const query: EngineeringVillageSearchQueryParams = {
		query: "test",
	}
	const r = await c.searchEngineeringVillage(query)
	//console.log(r.status, r.statusText)
	//console.log(r.content)
	expect(r.status).toBe(403)
})

test(`GET /search/sciencedirect`, async () => {
	const query = "test"
	const r = await c.searchScienceDirect(query)
	//console.log(r.status, r.statusText)
	//console.log(r.content)
	expect(r.status).toBe(401)
})

test(`GET /search/scopus`, async () => {
	const query = "test"
	const r = await c.searchScopus(query)
	console.log(r.status, r.statusText)
	console.log(r.content?.["search-results"].entry[0].freetoreadLabel)
	expect(r.status).toBe(200)
})
