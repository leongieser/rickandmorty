export interface Episode {
	id: string
	name: string
	air_date: string
	episode: string
	characters: string[]
	url: string
	created: string
}

export interface AllEpisodesResponse {
	info: {
		count: string
		pages: string
		next: string
		prev: string | null
	}
	results: Episode[]
}

export interface Charater {
	id: string
	name: string
	status: string
	species: string
	type: string
	gender: 'Male'
	origin: {
		name: string
		url: string
	}
	location: {
		name: string
		url: string
	}
	image: string
	episode: string[]
	url: string
	created: string
}
