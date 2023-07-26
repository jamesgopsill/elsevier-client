import assert from "node:assert"
import test, { before, describe } from "node:test"
import { ElsevierClient } from "../src/index.js"
import { auth } from "./test.config.js"

describe(`Ping`, { concurrency: 2 }, () => {
	let c: ElsevierClient

	before(() => {
		c = new ElsevierClient(auth.apiKey)
	})

	test(`GET /abstract`, async () => {
		const r = await c.abstract("doi", "10.1016/S0014-5793(01)03313-0")
		assert.strictEqual(r.status, 200, r.statusText)
	})

	test(`GET /article/embodiment/doi`, async () => {
		const r = await c.articleEntitlement("doi", "10.1016/S0014-5793(01)03313-0")
		assert.strictEqual(r.status, 403, r.statusText)
	})
})
