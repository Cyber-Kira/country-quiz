module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
		},
		colors: {
			transparrent: 'transparent',
			white: {
				50: '#FFFFFF',
				100: '#F2F2F2',
			},
			primary: {
				50: '#6066D0CC',
				100: '#2F527B',
				200: '#1D355S',
				300: 'rgba(96, 102, 208, 0.7)',
			},
			accent: {
				yellow: '#F9A826',
			},
			slate: {
				400: '#94a3b8',
			},
		},
	},
	plugins: [],
}
