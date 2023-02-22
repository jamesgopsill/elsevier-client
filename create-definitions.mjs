import { writeFileSync } from "fs"
import { json2ts } from "json-ts"

const urls = {
	SearchScienceDirectResponse:
		"https://dev.elsevier.com/payloads/search/scidirV2GETSearchResp.json",
	SearchAffiliationResponse:
		"https://dev.elsevier.com/payloads/search/affiliationSearchResp.json",
	SearchAuthorResponse:
		"https://dev.elsevier.com/payloads/search/authorSearchResp.json",
	SearchScopusResponse:
		"https://dev.elsevier.com/payloads/search/scopusSearchResp.json",
	SearchEngineeringVillageResponse:
		"https://api.engineeringvillage.com/EvDataWebServices/ev/results.json",
	AbstractRetrievalResponse:
		"https://dev.elsevier.com/payloads/retrieval/abstractRetrievalResp.json",
	AffiliationRetrievalResponse:
		"https://dev.elsevier.com/payloads/retrieval/affiliationRetrievalResp.json",
	ArticleEntitlementRetrievalResponse:
		"https://dev.elsevier.com/payloads/retrieval/articleEntitlementResp.json",
	ArticleRetrievalResponse:
		"https://dev.elsevier.com/payloads/retrieval/articleRetrievalResp.json",
	AuthorRetrievalResponse:
		"https://dev.elsevier.com/payloads/retrieval/multipleAuthorRetrievalResp.json",
	EngineeringVillageRecordRetrievalResponse:
		"https://api.engineeringvillage.com/EvDataWebServices/ev/results.json",
	ObjectRetrievalResponse:
		"https://dev.elsevier.com/payloads/retrieval/objectRetrievalResp.json",
	CitationCountResponse:
		"https://dev.elsevier.com/payloads/metadata/abstractCitationCountMeta.json",
	CitationsOverviewResponse:
		"https://dev.elsevier.com/payloads/metadata/abstractCitationResp.json",
	NonSerialTitleResponse:
		"https://dev.elsevier.com/payloads/metadata/nonSerialTitleSearchResp.json",
	SerialTitleResponse:
		"https://dev.elsevier.com/payloads/metadata/serialTitleSearchResp.json",
}

const dashedKey = (s) => {
	s = s.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
	s = s.substring(1)
	return s
}

let interfaces = ""

for (const [k, v] of Object.entries(urls)) {
	const r = await fetch(v)
	if (r.ok) {
		const j = await r.text()
		const i = json2ts(j, {
			namespace: k,
			prefix: "",
		})
		interfaces += `export ${i}\n`
	}
}

interfaces = interfaces.replaceAll("_", "")

const fname = `src/definitions/auto-generated.ts`
writeFileSync(fname, interfaces)
