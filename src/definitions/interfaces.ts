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
