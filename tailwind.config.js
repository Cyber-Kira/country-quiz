module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			animation: {
				'grow-in': 'grow .2s ease-in-out forwards',
			},
			keyframes: {
				grow: {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '0.2',
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1',
					},
				},
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
				200: '#1D355D',
				300: 'rgba(96, 102, 208, 0.7)',
			},
			accent: {
				yellow: '#F9A826',
				green: '#60BF88',
				red: '#EA8282',
			},
			slate: {
				400: '#94a3b8',
			},
		},
	},
	plugins: [],
}
