import { ElsevierClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ElsevierClient

beforeAll(() => {
	c = new ElsevierClient(auth.apiKey)
})

test(`ping`, () => {
	expect(c.ping()).toEqual("pong")
})
