import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap");
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box
	}
	::after,
	::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	body {
		overflow-x: hidden;
		min-width: 360px;
		font-family: Verdana, sans-serif;
		background: ${(props) => props.theme.colors.primary14};
	}
`
