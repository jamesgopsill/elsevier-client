import { ElsevierClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ElsevierClient

beforeAll(() => {
	c = new ElsevierClient(auth.apiKey)
})

test(`GET /abstract`, async () => {
	const r = await c.abstract("doi", "10.1016/S0014-5793(01)03313-0")
	//console.log(r.status, r.statusText)
	//console.log(r.content)
	expect(r.status).toBe(200)
})

test(`GET /article/embodiment/doi`, async () => {
	const r = await c.articleEntitlement("doi", "10.1016/S0014-5793(01)03313-0")
	//console.log(r.status, r.statusText)
	//console.log(r.content)
	expect(r.status).toBe(403)
})
