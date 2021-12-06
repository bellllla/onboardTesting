const path = require('path')
/** @type {import('next').NextConfig} */
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
		domains: ["user-images.githubusercontent.com"],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
  reactStrictMode: true,
  eslint: {
		ignoreDuringBuilds: true,
	},
}
