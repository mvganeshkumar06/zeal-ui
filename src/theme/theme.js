const theme = {
	color: {
		light: {
			background: {
				xlight: 'hsl(210, 5%, 98%)',
				light: 'hsl(210, 5%, 96%)',
				main: 'hsl(210, 5%, 93%)',
				dark: 'hsl(210, 5%, 89%)',
				xdark: 'hsl(210, 5%, 84%)',
			},
			onBackground: 'var(--zeal-color-black)',
			primary: {
				main: 'hsl(210, 75%, 65%)',
			},
			onPrimary: {
				main: 'var(--zeal-color-black)',
			},
			secondary: {
				main: 'hsl(270, 75%, 65%)',
			},
			onSecondary: {
				main: 'var(--zeal-color-black)',
			},
			accent: {
				main: 'hsl(330, 75%, 65%)',
			},
			onAccent: {
				main: 'var(--zeal-color-black)',
			},
			error: 'hsl(0, 75%, 65%)',
			onError: 'var(--zeal-color-black)',
			warning: 'hsl(25, 75%, 65%)',
			onWarning: 'var(--zeal-color-black)',
			success: 'hsl(140, 75%, 65%)',
			onSuccess: 'var(--zeal-color-black)',
			highlight: {
				base: 'hsla(210, 5%, 80%, 70%)',
				primary: 'hsl(210, 75%, 60%)',
				secondary: 'hsl(270, 75%, 60%)',
				accent: 'hsl(330, 75%, 60%)',
				error: 'hsl(0, 75%, 60%)',
				warning: 'hsl(25, 75%, 60%)',
				success: 'hsl(140, 75%, 60%)',
			},
			border: {
				base: 'hsl(0, 0%, 50%)',
			},
			backdrop: 'hsla(0, 0%, 10%, 80%)',
			scrollbar: {
				thumb: 'hsla(210, 5%, 70%, 70%)',
				track: 'hsl(210, 5%, 80%)',
			},
		},
		dark: {
			background: {
				xlight: 'hsl(210, 5%, 30%)',
				light: 'hsl(210, 5%, 25%)',
				main: 'hsl(210, 5%, 20%)',
				dark: 'hsl(210, 5%, 15%)',
				xdark: 'hsl(210, 5%, 10%)',
			},
			onBackground: 'var(--zeal-color-white)',
			primary: {
				main: 'hsl(210, 80%, 65%)',
			},
			onPrimary: {
				main: 'var(--zeal-color-black)',
			},
			secondary: {
				main: 'hsl(270, 80%, 65%)',
			},
			onSecondary: {
				main: 'var(--zeal-color-black)',
			},
			accent: {
				main: 'hsl(330, 80%, 65%)',
			},
			onAccent: {
				main: 'var(--zeal-color-black)',
			},
			error: 'hsl(0, 80%, 65%)',
			onError: 'var(--zeal-color-black)',
			warning: 'hsl(25, 80%, 65%)',
			onWarning: 'var(--zeal-color-black)',
			success: 'hsl(140, 80%, 65%)',
			onSuccess: 'var(--zeal-color-black)',
			highlight: {
				base: 'hsla(210, 5%, 30%, 50%)',
				primary: 'hsl(210, 80%, 60%)',
				secondary: 'hsl(270, 80%, 60%)',
				accent: 'hsl(330, 80%, 60%)',
				error: 'hsl(0, 80%, 60%)',
				warning: 'hsl(25, 80%, 60%)',
				success: 'hsl(140, 80%, 60%)',
			},
			border: {
				base: 'hsl(210, 5%, 70%)',
			},
			backdrop: 'hsla(0, 0%, 10%, 70%)',
			scrollbar: {
				thumb: 'hsla(210, 5%, 35%, 50%)',
				track: 'hsla(210, 5%, 30%, 70%)',
			},
		},
	},
	breakpoint: {
		mobile: '300px',
		tabletPotrait: '600px',
		tabletLandscape: '900px',
		desktop: '1200px',
		desktopLarge: '1500px',
	},
	fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
	shadow: {
		light: '0px 0px 2px rgba(0, 0, 0, 0.6)',
		medium: '0px 0px 4px rgba(0, 0, 0, 0.6)',
		dense: '0px 0px 6px rgba(0, 0, 0, 0.6)',
	},
	zIndex: {
		float: '10',
		banner: '20',
		drawer: '30',
		backdrop: '40',
		overlay: '50',
	},
};

export default theme;
