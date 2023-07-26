import assert from "node:assert"
import test, { before, describe } from "node:test"
import {
	ElsevierClient,
	EngineeringVillageSearchQueryParams,
} from "../src/index.js"
import { auth } from "./test.config.js"

describe(`Search`, { concurrency: 2 }, () => {
	let c: ElsevierClient

	before(() => {
		c = new ElsevierClient(auth.apiKey)
	})

	test(`GET /search/affiliation`, async () => {
		const query = "affil(Bristol)"
		const r = await c.searchAffiliations(query)
		assert.strictEqual(r.status, 401, r.statusText)
	})

	test(`GET /search/author`, async () => {
		const query = "authlast(Einstein)"
		const r = await c.searchAffiliations(query)
		assert.strictEqual(r.status, 401, r.statusText)
	})

	test(`GET /search/ev/results`, async () => {
		const query: EngineeringVillageSearchQueryParams = {
			query: "test",
		}
		const r = await c.searchEngineeringVillage(query)
		assert.strictEqual(r.status, 403, r.statusText)
	})

	test(`GET /search/sciencedirect`, async () => {
		const query = "test"
		const r = await c.searchScienceDirect(query)
		assert.strictEqual(r.status, 401, r.statusText)
	})

	test(`GET /search/scopus`, async () => {
		const query = "test"
		const r = await c.searchScopus(query)
		assert.strictEqual(r.status, 200, r.statusText)
	})
})
