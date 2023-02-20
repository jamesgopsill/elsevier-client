import type {
	EngineeringVillageDatabase,
	EngineeringVillageSortField,
} from "./enums.js"

export type HttpResponse<T> =
	| ({
			ok: true
			content: T
	  } & Response)
	| ({
			ok: false
			content: undefined
	  } & Response)

export interface EngineeringVillageSearchQueryParams {
	query: string
	database?: EngineeringVillageDatabase[]
	navigator?: boolean
	navigatorDataCount?: number
	autoStemming?: boolean
	startYear?: number
	endYear?: number
	updateNumber?: number
	sortField?: EngineeringVillageSortField
	offset?: number
	pageSize?: number
}

export interface SerialTitleQueryParams {
	title?: string
	issn?: string
	subj?: string
	subjCode?: string
	view?: string
	date?: string
}

export interface ScopusSearchResults {
	"search-results": {
		"opensearch:totalResults": string
		"opensearch:startIndex": string
		"opensearch:itemsPerPage": string
		"opensearch:Query": {
			"@role": string
			"@searchTerms": string
			"@startPage": string
		}
		link: Link[]
		entry: any[]
	}
}

export interface Link {
	"@_fa": string
	"@ref": string
	"@href": string
	"@type": string
}

export interface ScopusAffiliation {
	"@_fa"?: string
	affilname: string
	"affiliation-city": string
	"affiliation-country": string
}

export interface ScopusEntry {
	"@_fa": string
	link: Link[]
	"prism:url": string
	"dc:identifier": string
	eid: string
	"dc:title": string
	"dc:creator": string
	"prism:publicationName": string
	"prism:issn": string
	"prism:eIssn": string
	"prism:volume": string
	"prism:issueIdentifier": string
	"prism:pageRange": string | null
	"prism:coverDate": string
	"prism:coverDisplayDate": string
	"prism:doi": string
	"citedby-count": string
	affiliation: ScopusAffiliation[]
	"pubmed-id": string
	"prism:aggregationType": string
	subtype: string
	subtypeDescription: string
	"article-number": string
	"source-id": string
	openaccess: string
	openaccessFlag: boolean
	freetoread: {
		value: {
			$: string
		}[]
	}
	freetoreadLabel: {
		value: {
			$: string
		}[]
	}
}

export interface Author {
	"preferred-name": {
		"ce:given-name": string
		"ce:initials": string
		"ce:surname": string
		"ce:indexed-name": string
	}
	"@seq": string
	"ce:initials": string
	"@_fa": string
	affiliation: {
		"@id": string
		"@href": string
	}
	"ce:surname": string
	"@auid": string
	"author-url": string
	"ce:indexed-name": string
}

export interface AbstractRetrievalResponse {
	"abstracts-retrieval-response": {
		affiliation: ScopusAffiliation[]
		coredata: {
			srctype: string
			eid: string
			"pubmed-id": string
			"prism:coverDate": string
			"prism:aggregationType": string
			"prism:url": string
			"dc:creator": Author[]
			link: Link[]
			"source-id": string
			pii: string
			"citedby-count": string
			"prism:volume": string
			subtype: string
			"dc:title": string
			openaccess: string
			"prism:issn": string
			"prism:issueIdentifier": string
			subtypeDescription: string
			"prism:publicationName": string
			"prism:pageRange": string
			"prism:endingPage": string
			openaccessFlag: string
			"prism:doi": string
			"prism:startingPage": string
			"dc:identifier": string
		}
	}
}

export interface EntitlementResponse {
	"entitlement-response": {
		"document-entitlement": {
			"@status": string
			"dc:identifier": string
			"prism:url": string
			"prism:doi": string
			pii: string
			"pii-norm": string
			scopus_id: string
			pubmed_id: string
			eid: string
			entitled: string
			message: string
			link: {
				"@rel": string
				"@href": string
			}
		}
	}
}

export interface NameVariant {
	"@_fa": string
	$: string
}

export interface SearchAffiliation {
	"@_fa": string
	link: Link[]
	"prism:url": string
	"dc:identifier": string
	"affiliation-name": string
	"name-variant": NameVariant[]
	"document-count": string
	city: string
	country: string
}

export interface SearchAffiliationResponse {
	"search-results": {
		"opensearch:totalResults": string
		"opensearch:startIndex": string
		"opensearch:itemsPerPage": string
		"opensearch:Query": {
			"@role": string
			"@searchTerms": string
			"@startPage": string
		}
		link: Link[]
		entry: SearchAffiliation[]
	}
}

export interface SearchAuthor {
	"@_fa": string
	link: Link[]
	"prism:url": string
	"dc:identifier": string
	eid: string
	"preferred-name": {
		surname: string
		"given-name": string
		initials: string
	}
	"name-variant": {
		"@_fa": string
		surname: string
	}[]
	"document-count": string
	subject: {
		"@force-array": string
		"@abbr": string
		"@frequency": string
		$: string
	}[]
	"affiliation-current": {
		"affiliation-url": string
		"affiliation-id": string
		"affiliation-name": string
		"affiliation-city": string | null
		"affiliation-country": string
	}
}

export interface SearchAuthorResponse {
	"search-results": {
		"opensearch:totalResults": string
		"opensearch:startIndex": string
		"opensearch:itemsPerPage": string
		"opensearch:Query": {
			"@role": string
			"@searchTerms": string
			"@startPage": string
		}
		link: Link[]
		entry: SearchAuthor
	}
}

export interface SearchEngineeringVillageResponse {
	PAGE: {
		"RESULTS-COUNT": number
		"RESULTS-PER-PAGE": number
		"PAGE-RESULTS": {
			"PAGE-ENTRY": {
				"EI-DOCUMENT": {
					DOCUMENTPROPERTIES: {
						CPRT: string
						SD: string
						SE: string
						RIL: string
						CPR: string
						"LOAD-NO": string
						TI: string
						VO: string
						P_PP: string
						DO: string
						SN: string
						SO: string
					}
					DOCUMENTOBJECTS: {
						CITEDBY: {
							ISSN: string
							FIRSTISSUE: string
							FIRSTVOLUME: string
							FIRSTPAGE: string
							DOI: string
						}
					}
					DOC: {
						"DOC-ID": string
						HITINDEX: number
						DB: {
							DBNAME: string
							ID: string
						}
					}
					VIEW: string
					FT: {
						FTLINK: string
					}
					AFS: {
						AF: {
							ID: string
							NAME: string
						}[]
					}
					AUS: {
						AU: {
							ID: string
							EMAIL: string
							AFS: {
								AFID: string
							}
							NAME: string
						}[]
					}
				}
			}[]
		}
	}
}

export interface SearchScopusResponse {
	"search-results": {
		"opensearch:totalResults": string
		"opensearch:startIndex": string
		"opensearch:itemsPerPage": string
		"opensearch:Query": {
			"@role": string
			"@searchTerms": string
			"@startPage": string
		}
		link: Link[]
		entry: {
			"@_fa": string
			link: Link[]
			"prism:url": string
			"dc:identifier": string
			"dc:title": string
			"dc:creator": string
			"prism:publicationName": string
			"prism:issn": string
			"prism:eIssn": string
			"prism:volume": string
			"prism:pageRange": string
			"prism:coverDate": string
			"prism:coverDisplayDate": string
			"prism:doi": string
			"dc:description": string
			"citedby-count": string
			affiliation: {
				"@_fa": string
				"affiliation-url": string
				afid: string
				affilname: string
				"affiliation-city": string
				"affiliation-country": string
				"name-variant": {
					"@_fa": string
					$: string
				}[]
			}[]
			"prism:aggregationType": string
			subtype: string
			subtypeDescription: string
			author: {
				"@_fa": string
				"author-url": string
				authid: string
				authname: string
				surname: string
				initials: string
				afid: {
					"@_fa": string
					$: string
				}[]
			}[]
			authkeywords: string
		}[]
	}
}

export interface AuthorRetrievalResponse {
	"author-retrieval-response-list": {
		"author-retrieval-response": {
			"@status": string
			"@_fa": string
			coredata: {
				"prism:url": string
				"dc:identifier": string
				eid: string
				"document-count": string
				"cited-by-count": string
				"citation-count": string
				link: Link[]
			}
			"affiliation-current": {
				"@id": string
				"@href": string
			}
			"affiliation-history": {
				affiliation: {
					"@_fa": string
					"@id": string
					"@href": string
				}[]
			}
			"subject-areas": {
				"subject-area": {
					"@_fa": string
					"@abbrev": string
					"@code": string
					$: string
				}[]
			}
			"author-profile": {
				status: string
				"date-created": {
					"@day": string
					"@month": string
					"@year": string
				}
				"preferred-name": {
					initials: string
					"indexed-name": string
					surname: string
					"given-name": string
				}
				"name-variant": {
					initial: string
					"indexed-name": string
					surname: string
					"given-name": string
				}[]
				classificationgroup: {
					classifications: {
						"@type": string
						classifcation: {
							"@frequency": string
							$: string
						}[]
					}
				}
				"publication-range": {
					"@end": string
					"@start": string
				}
				"journal-history": {
					"@type": string
					journal: {
						"@type": string
						sourcetitle: string
						"sourcetitle-abbrev"?: string
						issn: string
					}[]
				}
				"affiliation-current": {
					affiliation: {
						"@affiliation-id": string
						"ip-doc": {
							"@id": string
							"@relationship": string
							"@type": string
							afnameid: string
							afdispname: string
							"preferred-name": string
							"sort-name": string
							address: {
								"@country": string
								city: string
								state: string
								"postal-code": string
								country: string
							}
						}
					}
				}
				"affiliation-history": {
					affiliation: {
						"@affiliation-id": string
						"ip-doc": {
							"@id": string
							"@relationship": string
							"@type": string
							afnameid: string
							afdispname: string
							"preferred-name": string
							"sort-name": string
							address: {
								"@country": string
								city: string
								state: string
								"postal-code": string
								country: string
							}
						}
					}[]
				}
			}
		}[]
	}
}
