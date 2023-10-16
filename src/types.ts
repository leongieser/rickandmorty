export interface Episode {
	id: string
	name: string
	air_date: string
	episode: string
	characters: string[]
	url: string
	created: string
}

export interface Character {
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

export interface Location {
	id: number
	name: string
	type: string
	dimension: string
	residents: string[]
	url: string
	created: string
}

export interface AllEpisodes {
	info: {
		count: string
		pages: string
		next: string
		prev: string | null
	}
	results: Episode[]
}

export interface AllCharacters {
	info: {
		count: string
		pages: string
		next: string
		prev: string | null
	}
	results: Character[]
}

export interface AllLocations {
	info: {
		count: string
		pages: string
		next: string
		prev: string | null
	}
	results: Location[]
}
