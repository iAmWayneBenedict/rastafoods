module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: "Quicksand",
			serif: "Quicksand",
		},
	},
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["rounded"],
	},
};
