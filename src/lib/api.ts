import {
	AllEpisodes,
	Episode,
	Location,
	AllLocations,
	AllCharacters,
	Character,
} from '@/ram/types'

const BASE_URL = 'https://rickandmortyapi.com/api'

export const getAllEpisodes = async (page = 1) => {
	const res = await fetch(`${BASE_URL}/episode?page=${page}`)
	const data: AllEpisodes = await res.json()
	return data
}

export const getAllCharacters = async (page = 1) => {
	const res = await fetch(`${BASE_URL}/character/?page=${page}`)
	const data: AllCharacters = await res.json()
	return data
}

export const getAllLocations = async (page = 1) => {
	const res = await fetch(`${BASE_URL}/location/?page=${page}`)
	const data: AllLocations = await res.json()
	return data
}

export const getCharacterById = async (id: string) => {
	const res = await fetch(`${BASE_URL}/character/${id}`)
	const data: Character = await res.json()

	return data
}

export const getEpisodeById = async (id: string) => {
	const res = await fetch(`${BASE_URL}/episode/${id}`)
	const data: Episode = await res.json()
	return data
}

export const getLocationById = async (id: string) => {
	const res = await fetch(`${BASE_URL}/location/${id}`)
	const data: Location = await res.json()
	return data
}

export const getCharactersByEpisodeId = async (id: string) => {
	const res = await fetch(`${BASE_URL}/episode/${id}`)
	const { characters: characterUrls } = await res.json()
	const characters: Character[] = await Promise.all(
		characterUrls.map(async (url: string) => {
			const res = await fetch(url)
			const character = await res.json()
			return character
		})
	)
	return characters
}

export const getCharactersByLocation = async (id: string) => {
	const res = await fetch(`${BASE_URL}/location/${id}`)
	const { residents: characterUrls } = await res.json()
	const characters: Character[] = await Promise.all(
		characterUrls.map(async (url: string) => {
			const res = await fetch(url)
			const character = await res.json()
			return character
		})
	)
	return characters
}

export const getEpisodesByCharacterId = async (id: string) => {
	const res = await fetch(`${BASE_URL}/character/${id}`)
	const { episode: episodeUrls } = await res.json()
	const episodes: Episode[] = await Promise.all(
		episodeUrls.map(async (url: string) => {
			const res = await fetch(url)
			const episode = await res.json()
			return episode
		})
	)
	return episodes
}
