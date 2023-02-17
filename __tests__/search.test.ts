import { ElsevierClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ElsevierClient

beforeAll(() => {
	c = new ElsevierClient(auth.apiKey, auth.insttoken)
})

test(`GET /search/affiliation`, async () => {
	const query = "affil(Bristol)"
	const r = await c.searchAffiliations(query)
	console.log(r.status, r.statusText)
	console.log(r.content)
	expect(r.ok).toBe(true)
})
