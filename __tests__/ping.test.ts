import assert from "node:assert"
import test, { before, describe } from "node:test"
import { ElsevierClient } from "../src/index.js"
import { auth } from "./test.config.js"

describe(`Ping`, { concurrency: 2 }, () => {
	let c: ElsevierClient

	before(() => {
		c = new ElsevierClient(auth.apiKey)
	})

	test(`ping`, () => {
		assert.strictEqual(c.ping(), "pong")
	})
})
