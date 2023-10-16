/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ['rickandmortyapi.com'],
	},
}

module.exports = nextConfig
