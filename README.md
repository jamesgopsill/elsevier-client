# Elesvier API Typescript Client

The client has been developed as part of a research programme investigating agent-based manufacturing systems. The client has been used in our systematic literature reviews. It is isomorphic capable of running on server (Node.js) and client-side (Browser) applications.

## Using elsevier-client

To install the package, use the following code. I am aiming to put it onto npm soon.

```
pnpm install @jamesgopsill/elsevier-client
```

You can then use in your code:

**Typescript / Javascript (ESM)**

```typescript
import { ElsevierClient } from "@jamesgopsill/elsevier-client"

const c = new ElsevierClient("API_KEY")

const r = await c.abstract("doi", "10.1016/S0014-5793(01)03313-0")
if (r.ok && r.status == 200) {
	console.log(r.content)
}
```

**Javascript (CJS)**

```javascript
const { ElsevierClient } = require("@jamesgopsill/elsevier-client")

const c = new ElsevierClient("API_KEY")
if (r.ok && r.status == 200) {
	console.log(r.content)
}
```

## Client Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/elsevier-client/). More details on the API can be found at [Elsevier API](https://dev.elsevier.com/).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

If you end up using the client a lot, please consider sponsoring the project to support the continued development and maintanence of the client.
