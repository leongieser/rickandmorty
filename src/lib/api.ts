// import { z } from 'zod'
import { AllEpisodesResponse, Episode } from '@/ram/types'

const BASE_URL = 'https://rickandmortyapi.com/api'

// const EpisodeSchema = z.object({
// 	id: z.number(),
// 	name: z.string(),
// 	air_date: z.string(),
// 	episode: z.string(),
// 	characters: z.array(z.string()),
// 	url: z.string(),
// 	created: z.string(),
// })

export const getEpisode = async (id: string) => {
	const res = await fetch(`${BASE_URL}/episode/${id}`)
	const data = await res.json()

	return data
}

// export const AllEpisodesResponse = z.object({
// 	info: z.object({
// 		count: z.number(),
// 		pages: z.number(),
// 		next: z.string(),
// 		prev: z.nullable(z.string()),
// 	}),
// 	results: z.array(z.array(EpisodeSchema)),
// })

export const getAllEpisodes = async (page = 1) => {
	const res = await fetch(`${BASE_URL}/episode?page=${page}`)
	const data: AllEpisodesResponse = await res.json()
	return data
}

export const getCharacter = async (id: string) => {
	const res = await fetch(`${BASE_URL}/character/${id}`)
	const data = await res.json()

	return data
}

export const getCharactersByEpisodeId = async (id: string) => {
	const res = await fetch(`${BASE_URL}/episode/${id}`)
	const { characters: characterUrls } = await res.json()
	const characters = await Promise.all(
		characterUrls.map(async (url: string) => {
			const res = await fetch(url)
			const character = await res.json()
			return character
		})
	)
	return characters
}

export const getEpisodeById = async (id: string) => {
	const res = await fetch(`${BASE_URL}/episode/${id}`)
	const data: Episode = await res.json()
	return data
}
