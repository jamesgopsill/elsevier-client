export declare namespace SearchScienceDirectResponse {
	export interface RootObject {
		"search-results": {
			"opensearch:totalResults": string
			"opensearch:startIndex": string
			"opensearch:itemsPerPage": string
			"opensearch:Query": {
				"@role": string
				"@searchTerms": string
				"@startPage": string
			}
			link: LinkItem[]
			entry: EntryItem[]
		}
	}
	export interface LinkItem {
		"@fa": string
		"@ref": string
		"@href": string
		"@type"?: string
	}
	export interface EntryItem {
		"@fa": string
		"load-date": string
		link: LinkItem[]
		"dc:identifier": string
		"prism:url": string
		"dc:title": string
		"prism:publicationName": string
		"prism:coverDate": string
		"prism:startingPage": string
		"prism:doi": string
		openaccess: boolean
		pii: string
		authors: null | Authors
		"dc:creator"?: string
		"prism:endingPage"?: string
	}
	export interface Authors {
		author: string
	}
}

export declare namespace SearchAffiliationResponse {
	export interface RootObject {
		"search-results": {
			"opensearch:totalResults": string
			"opensearch:startIndex": string
			"opensearch:itemsPerPage": string
			"opensearch:Query": {
				"@role": string
				"@searchTerms": string
				"@startPage": string
			}
			link: LinkItem[]
			entry: EntryItem[]
		}
	}
	export interface LinkItem {
		"@fa": string
		"@ref": string
		"@href": string
		"@type"?: string
	}
	export interface EntryItem {
		"@fa": string
		link: LinkItem[]
		"prism:url": string
		"dc:identifier": string
		"affiliation-name": string
		"name-variant": NameVariantItem[]
		"document-count": string
		city: string
		country: string
	}
	export interface NameVariantItem {
		"@fa": string
		$: string
	}
}

export declare namespace SearchAuthorResponse {
	export interface RootObject {
		"search-results": {
			"opensearch:totalResults": string
			"opensearch:startIndex": string
			"opensearch:itemsPerPage": string
			"opensearch:Query": {
				"@role": string
				"@searchTerms": string
				"@startPage": string
			}
			link: LinkItem[]
			entry: EntryItem[]
		}
	}
	export interface LinkItem {
		"@fa": string
		"@ref": string
		"@href": string
		"@type"?: string
	}
	export interface EntryItem {
		"@fa": string
		link: LinkItem[]
		"prism:url": string
		"dc:identifier": string
		eid: string
		"preferred-name": {
			surname: string
			"given-name": string
			initials: string
		}
		"name-variant": NameVariantItem[]
		"document-count": string
		subject: SubjectItem[]
		"affiliation-current": {
			"affiliation-url": string
			"affiliation-id": string
			"affiliation-name": string
			"affiliation-city": null
			"affiliation-country": string
		}
	}
	export interface NameVariantItem {
		"@fa": string
		surname: string
		"given-name"?: string
		initials?: string
	}
	export interface SubjectItem {
		"@force-array": string
		"@abbr": string
		"@frequency": string
		$: string
	}
}

export declare namespace SearchScopusResponse {
	export interface RootObject {
		"search-results": {
			"opensearch:totalResults": string
			"opensearch:startIndex": string
			"opensearch:itemsPerPage": string
			"opensearch:Query": {
				"@role": string
				"@searchTerms": string
				"@startPage": string
			}
			link: LinkItem[]
			entry: EntryItem[]
		}
	}
	export interface LinkItem {
		"@fa": string
		"@ref": string
		"@href": string
		"@type"?: string
	}
	export interface EntryItem {
		"@fa": string
		link: LinkItem[]
		"prism:url": string
		"dc:identifier": string
		"dc:title": string
		"dc:creator": string
		"prism:publicationName": string
		"prism:issn": string
		"prism:eIssn"?: string
		"prism:volume": string
		"prism:pageRange": string
		"prism:coverDate": string
		"prism:coverDisplayDate": string
		"prism:doi"?: string
		"dc:description": string
		"citedby-count": string
		affiliation: AffiliationItem[]
		"prism:aggregationType": string
		subtype: string
		subtypeDescription: string
		author: AuthorItem[]
		authkeywords: string
		"prism:issueIdentifier"?: string
	}
	export interface AffiliationItem {
		"@fa": string
		"affiliation-url": string
		afid: string
		affilname: string
		"affiliation-city": string
		"affiliation-country": string
		"name-variant": NameVariantItem[]
	}
	export interface NameVariantItem {
		"@fa": string
		$: string
	}
	export interface AuthorItem {
		"@fa": string
		"author-url": string
		authid: string
		authname: string
		surname: string
		initials: string
		afid?: AfidItem[]
		"given-name"?: string
	}
	export interface AfidItem {
		"@fa": string
		$: string
	}
}

export declare namespace SearchEngineeringVillageResponse {
	export interface RootObject {
		PAGE: PAGE
	}
	export interface PAGE {
		"RESULTS-COUNT": number
		"RESULTS-PER-PAGE": number
		"PAGE-RESULTS": {
			"PAGE-ENTRY": PAGEENTRYItem[]
		}
	}
	export interface PAGEENTRYItem {
		"EI-DOCUMENT": {
			DOCUMENTPROPERTIES: DOCUMENTPROPERTIES
			DOCUMENTOBJECTS: DOCUMENTOBJECTS
			DOC: DOC
			VIEW: string
			FT: FT
			AFS: AFS
			AUS: AUS
		}
	}
	export interface DOCUMENTPROPERTIES {
		CPRT: string
		SD: string
		SE?: string
		RIL?: string
		CPR: string
		"LOAD-NO": string
		TI: string
		VO?: string
		PPP?: string
		DO?: string
		SN?: string
		SO: string
		PP?: string
		RCT?: string
		DT?: string
		YR?: string
		PN?: string
		ARTICLENUMBER?: string
		CN?: string
		LA?: string
		MT?: string
	}
	export interface DOCUMENTOBJECTS {
		CITEDBY: CITEDBY
	}
	export interface CITEDBY {
		ISSN?: string
		FIRSTISSUE?: string
		FIRSTVOLUME?: string
		FIRSTPAGE?: string
		DOI?: string
		PII?: string
		ISBN13?: string
	}
	export interface DOC {
		"DOC-ID": string
		HITINDEX: number
		DB: DB
	}
	export interface DB {
		DBNAME: string
		ID: string
	}
	export interface FT {
		FTLINK: string
	}
	export interface AFS {
		AF?: AFItem[]
		AFID?: string | number[]
	}
	export interface AFItem {
		ID: string
		NAME: string
	}
	export interface AUS {
		AU: AUItem[]
	}
	export interface AUItem {
		ID: string
		EMAIL?: string
		AFS: AFS
		NAME: string
	}
}

export declare namespace AbstractRetrievalResponse {
	export interface RootObject {
		"abstracts-retrieval-response": {
			coredata: Coredata
			affiliation: AffiliationItem[]
			authors: Authors
			language: Language
			authkeywords: Authkeywords
			idxterms: Idxterms
			"subject-areas": {
				"subject-area": SubjectAreaItem[]
			}
			item: Item
		}
	}
	export interface Coredata {
		"prism:url": string
		"dc:identifier": string
		"pubmed-id": string
		pii: string
		"prism:doi": string
		"dc:title": string
		"prism:aggregationType": string
		srctype: string
		"citedby-count": string
		"prism:publicationName": string
		"prism:issn": string
		"prism:volume": string
		"prism:issueIdentifier": string
		"prism:startingPage": string
		"prism:endingPage": string
		"prism:pageRange": string
		"prism:coverDate": string
		"dc:creator": {
			author: AuthorItem[]
		}
		"dc:description": string
		intid: string
		link: LinkItem[]
	}
	export interface AuthorItem {
		"@fa"?: string
		"@auid"?: string
		"@seq": string
		"ce:initials": string
		"ce:indexed-name": string
		"ce:surname": string
		"preferred-name"?: {
			"ce:initials": string
			"ce:indexed-name": string
			"ce:surname": string
			"ce:given-name": string
		}
		"author-url"?: string
		affiliation?: Affiliation | AffiliationItem[]
		"ce:e-address"?: {
			"@type": string
			$: string
		}
	}
	export interface Affiliation {
		"@href"?: string
		"@id"?: string
		"@afid"?: string
		"@country"?: string
		"@dptid"?: string
		organization?: OrganizationItem[]
		"address-part"?: string
		"city-group"?: string
	}
	export interface LinkItem {
		"@fa"?: string
		"@href"?: string
		"@rel"?: string
		$?: string
	}
	export interface AffiliationItem {
		"@href": string
		"@id": string
		affilname?: string
	}
	export interface Authors {
		author: AuthorItem[]
	}
	export interface Language {
		"@xml:lang": string
	}
	export interface Authkeywords {
		"author-keyword": AuthorKeywordItem[]
	}
	export interface AuthorKeywordItem {
		$: string
	}
	export interface Idxterms {
		mainterm: MaintermItem[]
	}
	export interface MaintermItem {
		"@candidate": string
		"@weight": string
		$: string
	}
	export interface SubjectAreaItem {
		"@fa": string
		"@abbrev": string
		"@code": string
		$: string
	}
	export interface Item {
		"ait:process-info": {
			"ait:date-delivered": {
				"@day": string
				"@month": string
				"@timestamp": string
				"@year": string
			}
			"ait:date-sort": {
				"@day": string
				"@month": string
				"@year": string
			}
			"ait:status": {
				"@stage": string
				"@state": string
				"@type": string
			}
		}
		bibrecord: Bibrecord
	}
	export interface Bibrecord {
		"item-info": {
			copyright: CopyrightItem[]
			itemidlist: Itemidlist
			history: History
			dbcollection: DbcollectionItem[]
		}
		head: Head
		tail: Tail
	}
	export interface CopyrightItem {
		"@type": string
		$: string
	}
	export interface Itemidlist {
		"ce:pii": string
		"ce:doi": string
		itemid: ItemidItem[]
	}
	export interface ItemidItem {
		"@idtype": string
		$: string
	}
	export interface History {
		"date-created": {
			"@day": string
			"@month": string
			"@year": string
		}
	}
	export interface DbcollectionItem {
		$: string
	}
	export interface Head {
		"citation-info": {
			"citation-type": {
				"@code": string
			}
			"citation-language": {
				"@xml:lang": string
			}
			"abstract-language": {
				"@xml:lang": string
			}
			"author-keywords": {
				"author-keyword": AuthorKeywordItem[]
			}
		}
		"citation-title": string
		"author-group": AuthorGroupItem[]
		correspondence: Correspondence
		abstracts: string
		source: Source
		enhancement: Enhancement
	}
	export interface AuthorGroupItem {
		author: AuthorItem[] | Author
		affiliation: Affiliation
	}
	export interface OrganizationItem {
		$: string
	}
	export interface Author {
		"@auid"?: string
		"@seq": string
		"ce:initials": string
		"ce:indexed-name": string
		"ce:surname": string
		"preferred-name"?: {
			"ce:initials": string
			"ce:indexed-name": string
			"ce:surname": string
			"ce:given-name": string
		}
		"ce:e-address"?: {
			"@type": string
			$: string
		}
	}
	export interface Correspondence {
		person: Person
		affiliation: Affiliation
		"ce:e-address": {
			"@type": string
			$: string
		}
	}
	export interface Person {
		"ce:initials": string
		"ce:indexed-name": string
		"ce:surname": string
	}
	export interface Source {
		"@country": string
		"@srcid": string
		"@type": string
		sourcetitle: string
		"sourcetitle-abbrev": string
		issn: Issn
		codencode: string
		volisspag: Volisspag
		publicationyear: Publicationyear
		publicationdate: Publicationdate
	}
	export interface Issn {
		"@type": string
		$: string
	}
	export interface Volisspag {
		voliss: Voliss
		pagerange: Pagerange
	}
	export interface Voliss {
		"@issue"?: string
		"@volume": string
	}
	export interface Pagerange {
		"@first": string
		"@last": string
	}
	export interface Publicationyear {
		"@first": string
	}
	export interface Publicationdate {
		year: string
		month: string
		day: string
		"date-text": {
			"@xfab-added": string
			$: string
		}
	}
	export interface Enhancement {
		descriptorgroup: Descriptorgroup
		classificationgroup: Classificationgroup
		manufacturergroup: Manufacturergroup
		chemicalgroup: Chemicalgroup
	}
	export interface Descriptorgroup {
		descriptors: DescriptorsItem[]
	}
	export interface DescriptorsItem {
		"@controlled": string
		"@type": string
		descriptor: DescriptorItem[]
	}
	export interface DescriptorItem {
		mainterm: Mainterm
		link?: LinkItem[] | string
	}
	export interface Mainterm {
		"@candidate": string
		"@weight": string
		$: string
	}
	export interface Classificationgroup {
		classifications: ClassificationsItem[]
	}
	export interface ClassificationsItem {
		"@type": string
		classification: ClassificationItem[] | string
	}
	export interface ClassificationItem {
		$: string
	}
	export interface Manufacturergroup {
		manufacturers: Manufacturers
	}
	export interface Manufacturers {
		"@type": string
		manufacturer: Manufacturer
	}
	export interface Manufacturer {
		"@country": string
		$: string
	}
	export interface Chemicalgroup {
		chemicals: Chemicals
	}
	export interface Chemicals {
		"@source": string
		chemical: ChemicalItem[]
	}
	export interface ChemicalItem {
		"chemical-name": string
		"cas-registry-number": string
	}
	export interface Tail {
		bibliography: Bibliography
	}
	export interface Bibliography {
		"@refcount": string
		reference: ReferenceItem[]
	}
	export interface ReferenceItem {
		"@id": string
		"ref-info": {
			"refd-itemidlist": {
				itemid: Itemid
			}
			"ref-authors": {
				author: AuthorItem[]
			}
			"ref-sourcetitle": string
			"ref-publicationyear": {
				"@first": string
			}
			"ref-volisspag": {
				voliss: Voliss
				pagerange: Pagerange
			}
		}
	}
	export interface Itemid {
		"@idtype": string
		$: string
	}
}

export declare namespace AffiliationRetrievalResponse {
	export interface RootObject {
		"affiliation-retrieval-response": {
			coredata: Coredata
			"affiliation-name": string
			"name-variants": {
				"name-variant": NameVariantItem[]
			}
			address: string
			city: string
			country: string
			"institution-profile": {
				status: string
				"date-created": {
					"@year": string
					"@month": string
					"@day": string
				}
				"preferred-name": string
				"sort-name": string
				"name-variant": string
				address: Address
				"org-type": string
			}
		}
	}
	export interface Coredata {
		"prism:url": string
		"dc:identifier": string
		"author-count": string
		"document-count": string
		link: LinkItem[]
	}
	export interface LinkItem {
		"@rel": string
		"@href": string
		"@fa": string
	}
	export interface NameVariantItem {
		"@fa": string
		"name-variant": string
	}
	export interface Address {
		"@country": string
		"address-part": string
		city: string
		state: string
		"postal-code": string
		country: string
	}
}

export declare namespace ArticleEntitlementRetrievalResponse {
	export interface RootObject {
		"entitlement-response": {
			"document-entitlement": {
				"@status": string
				"dc:identifier": string
				"prism:url": string
				"prism:doi": string
				pii: string
				"pii-norm": string
				eid: string
				entitled: boolean
				message: string
				link: Link
			}
		}
	}
	export interface Link {
		"@rel": string
		"@href": string
	}
}

export declare namespace ArticleRetrievalResponse {
	export interface RootObject {
		"full-text-retrieval-response": {
			coredata: Coredata
			objects: Objects
			"scopus-id": string
			"scopus-eid": string
			"pubmed-id": string
			link: Link
			originalText: string
		}
	}
	export interface Coredata {
		"prism:url": string
		"dc:identifier": string
		"prism:doi": string
		pii: string
		"dc:title": string
		"prism:publicationName": string
		"prism:aggregationType": string
		"prism:issn": string
		"prism:volume": string
		"prism:issueIdentifier": string
		"prism:startingPage": string
		"prism:endingPage": string
		"prism:coverDate": string
		"prism:coverDisplayDate": string
		"prism:copyright": string
		"dc:creator": string
		authors: string
		"dc:description": string
		openaccess: string
		openaccessFlag: boolean
		openaccessType: string
		link: LinkItem[]
	}
	export interface LinkItem {
		"@href": string
		"@rel": string
		"@fa": string
	}
	export interface Objects {
		object: ObjectItem[]
	}
	export interface ObjectItem {
		"@fa": string
		"@ref": string
		"@category": string
		"@type": string
		"@multimediatype": string
		"@mimetype": string
		"@width": string
		"@height": string
		"@size": string
		$: string
	}
	export interface Link {
		"@href": string
		"@rel": string
	}
}

export declare namespace AuthorRetrievalResponse {
	export interface RootObject {
		"author-retrieval-response-list": {
			"author-retrieval-response": AuthorRetrievalResponseItem[]
		}
	}
	export interface AuthorRetrievalResponseItem {
		"@status": string
		"@fa": string
		coredata: Coredata
		"affiliation-current"?: {
			"@id": string
			"@href": string
		}
		"affiliation-history"?: {
			affiliation: AffiliationItem[]
		}
		"subject-areas"?: {
			"subject-area": SubjectAreaItem[]
		}
		"author-profile"?: {
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
			"name-variant": NameVariantItem[]
			classificationgroup: Classificationgroup
			"publication-range": {
				"@end": string
				"@start": string
			}
			"journal-history": {
				"@type": string
				journal: JournalItem[]
			}
			"affiliation-current": {
				affiliation: Affiliation
			}
			"affiliation-history": {
				affiliation: AffiliationItem[]
			}
		}
	}
	export interface Coredata {
		"prism:url": string
		"dc:identifier": string
		eid?: string
		"document-count"?: string
		"cited-by-count"?: string
		"citation-count"?: string
		link?: LinkItem[]
	}
	export interface LinkItem {
		"@rel": string
		"@href": string
		"@fa": string
	}
	export interface AffiliationItem {
		"@fa"?: string
		"@id"?: string
		"@href"?: string
		"@affiliation-id"?: string
		"ip-doc"?: {
			"@id": string
			"@relationship": string
			"@type": string
			afnameid: string
			afdispname: string
			"preferred-name": string
			"sort-name": string
			address: Address
		}
		"@parent"?: string
	}
	export interface SubjectAreaItem {
		"@fa": string
		"@abbrev": string
		"@code": string
		$: string
	}
	export interface NameVariantItem {
		initials: string | null
		"indexed-name": string
		surname: string
		"given-name"?: string | null
	}
	export interface Classificationgroup {
		classifications: Classifications
	}
	export interface Classifications {
		"@type": string
		classification: ClassificationItem[]
	}
	export interface ClassificationItem {
		"@frequency": string
		$: string
	}
	export interface JournalItem {
		"@type": string
		sourcetitle: string
		"sourcetitle-abbrev"?: string
		issn?: string
	}
	export interface Affiliation {
		"@affiliation-id": string
		"ip-doc": {
			"@id": string
			"@relationship": string
			"@type": string
			afnameid: string
			afdispname: string
			"preferred-name": string
			"sort-name": string
			address: Address
		}
		"@parent"?: string
	}
	export interface Address {
		"@country": string
		city?: string
		state?: string
		"postal-code"?: string
		country: string
		"address-part"?: string
	}
	export interface Alias {
		"@current-status": string
		"aliased-id": {
			"@status": string
			"@timestamp": string
			$: string
		}
	}
}

export declare namespace EngineeringVillageRecordRetrievalResponse {
	export interface RootObject {
		PAGE: PAGE
	}
	export interface PAGE {
		"RESULTS-COUNT": number
		"RESULTS-PER-PAGE": number
		"PAGE-RESULTS": {
			"PAGE-ENTRY": PAGEENTRYItem[]
		}
	}
	export interface PAGEENTRYItem {
		"EI-DOCUMENT": {
			DOCUMENTPROPERTIES: DOCUMENTPROPERTIES
			DOCUMENTOBJECTS: DOCUMENTOBJECTS
			DOC: DOC
			VIEW: string
			FT: FT
			AFS: AFS
			AUS: AUS
		}
	}
	export interface DOCUMENTPROPERTIES {
		CPRT: string
		SD: string
		SE?: string
		RIL?: string
		CPR: string
		"LOAD-NO": string
		TI: string
		VO?: string
		PPP?: string
		DO?: string
		SN?: string
		SO: string
		PP?: string
		RCT?: string
		DT?: string
		YR?: string
		PN?: string
		ARTICLENUMBER?: string
		CN?: string
		LA?: string
		MT?: string
	}
	export interface DOCUMENTOBJECTS {
		CITEDBY: CITEDBY
	}
	export interface CITEDBY {
		ISSN?: string
		FIRSTISSUE?: string
		FIRSTVOLUME?: string
		FIRSTPAGE?: string
		DOI?: string
		PII?: string
		ISBN13?: string
	}
	export interface DOC {
		"DOC-ID": string
		HITINDEX: number
		DB: DB
	}
	export interface DB {
		DBNAME: string
		ID: string
	}
	export interface FT {
		FTLINK: string
	}
	export interface AFS {
		AF?: AFItem[]
		AFID?: string | number[]
	}
	export interface AFItem {
		ID: string
		NAME: string
	}
	export interface AUS {
		AU: AUItem[]
	}
	export interface AUItem {
		ID: string
		EMAIL?: string
		AFS: AFS
		NAME: string
	}
}

export declare namespace ObjectRetrievalResponse {
	export interface RootObject {
		"attachment-metadata-response": {
			coredata: Coredata
			attachment: AttachmentItem[]
		}
	}
	export interface Coredata {
		"prism:url": string
		"dc:identifier": string
		"prism:doi": string
		openaccess: string
		openaccessFlag: boolean
		link: LinkItem[]
	}
	export interface LinkItem {
		"@rel": string
		"@href": string
		"@fa": string
	}
	export interface AttachmentItem {
		"@fa": string
		"prism:url": string
		ref: string
		filename: string
		mimetype: string
		size: string
		height: string
		width: string
		type: string
	}
}

export declare namespace CitationCountResponse {
	export interface RootObject {
		"citation-count-response": {
			document: Document
		}
	}
	export interface Document {
		"@status": string
		"dc:identifier": string
		"prism:url": string
		"prism:doi": string
		pii: string
		pubmedid: null
		eid: string
		"citation-count": string
		link: LinkItem[]
	}
	export interface LinkItem {
		"@fa": string
		"@href": string
		"@rel": string
	}
}

export declare namespace CitationsOverviewResponse {
	export interface RootObject {
		"abstract-citations-response": {
			"h-index": string
			"identifier-legend": {
				identifier: IdentifierItem[]
			}
			citeInfoMatrix: CiteInfoMatrix
			citeColumnTotalXML: CiteColumnTotalXML
		}
	}
	export interface IdentifierItem {
		"@fa": string
		"dc:identifier": string
		"prism:doi": string
		pii: string
		scopusid: string
	}
	export interface CiteInfoMatrix {
		citeInfoMatrixXML: CiteInfoMatrixXML
	}
	export interface CiteInfoMatrixXML {
		citationMatrix: CitationMatrix
	}
	export interface CitationMatrix {
		citeInfo: CiteInfoItem[]
	}
	export interface CiteInfoItem {
		"@fa": string
		"dc:identifier": string
		"prism:url": string
		"dc:title": string
		author: AuthorItem[]
		citationType: CitationType
		"sort-year": string
		"prism:publicationName": string
		"prism:volume": string
		"prism:issueIdentifier": string
		"prism:startingPage": string
		"prism:endingPage": string
		"prism:issn": string
		pcc: string
		cc: CcItem[]
		lcc: string
		rangeCount: string
		rowTotal: string
	}
	export interface AuthorItem {
		"@fa": string
		initials: string
		"index-name": string
		surname: string
		authid: string
		"author-url": string
	}
	export interface CitationType {
		"@code": string
		$: string
	}
	export interface CcItem {
		"@fa": string
		$: string
	}
	export interface CiteColumnTotalXML {
		citeCountHeader: CiteCountHeader
	}
	export interface CiteCountHeader {
		prevColumnHeading: string
		columnHeading: ColumnHeadingItem[]
		laterColumnHeading: string
		prevColumnTotal: string
		columnTotal: ColumnTotalItem[]
		laterColumnTotal: string
		rangeColumnTotal: string
		grandTotal: string
	}
	export interface ColumnHeadingItem {
		"@fa": string
		$: string
	}
	export interface ColumnTotalItem {
		"@fa": string
		$: string
	}
}

export declare namespace NonSerialTitleResponse {
	export interface RootObject {
		"nonserial-metadata-response": {
			link: LinkItem[]
			entry: EntryItem[]
		}
	}
	export interface LinkItem {
		"@fa"?: string
		"@ref"?: string
		"@href": string
		"@type"?: string
		"@rel"?: string
	}
	export interface EntryItem {
		"@fa": string
		"dc:title": string
		"prism:edition"?: null | string
		"prism:aggregationType": string
		"dc:publisher": {
			"@id": string
			$: string
		}
		"prism:isbn": string
		"subject-area": SubjectAreaItem[]
		authors: null | string
		editors: string | null
		link: LinkItem[]
		"prism:url": string
	}
	export interface SubjectAreaItem {
		"@fa": string
		"@code": string
		"@abbrev": string
		$: string
	}
}

export declare namespace SerialTitleResponse {
	export interface RootObject {
		"serial-metadata-response": {
			link: LinkItem[]
			entry: EntryItem[]
		}
	}
	export interface LinkItem {
		"@fa": string
		"@ref": string
		"@href": string
		"@type"?: string
	}
	export interface EntryItem {
		"@fa": string
		"dc:title": string
		"dc:publisher": string
		"prism:aggregationType": string
		"source-id": string
		"prism:issn": string
		"prism:eIssn"?: string
		openaccess: null | string
		openaccessArticle: null | boolean
		openArchiveArticle: null | boolean
		openaccessType: null | string
		openaccessStartDate: null
		oaAllowsAuthorPaid: null | boolean
		"subject-area": SubjectAreaItem[]
		SNIPList?: SNIPList
		SJRList?: SJRList
		citeScoreYearInfoList?: CiteScoreYearInfoList
		link: LinkItem[]
		"prism:url": string
		openaccessWindow?: OpenaccessWindow
	}
	export interface SubjectAreaItem {
		"@fa": string
		"@code": string
		"@abbrev": string
		$: string
	}
	export interface SNIPList {
		SNIP: SNIPItem[]
	}
	export interface SNIPItem {
		"@fa": string
		"@year": string
		$: string
	}
	export interface SJRList {
		SJR: SJRItem[]
	}
	export interface SJRItem {
		"@fa": string
		"@year": string
		$: string
	}
	export interface CiteScoreYearInfoList {
		citeScoreCurrentMetric: string
		citeScoreCurrentMetricYear: string
		citeScoreTracker: string
		citeScoreTrackerYear: string
	}
	export interface OpenaccessWindow {
		openaccessSponsorName: null
		openaccessSponsorType: string
		openaccessUserLicense: null
	}
}
