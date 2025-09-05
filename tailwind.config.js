const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addVariant, e }) {
	addVariant('hs-dropdown-open', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.hs-dropdown.open > .${e(`hs-dropdown-open${separator}${className}`)}`;
		});
	});
})