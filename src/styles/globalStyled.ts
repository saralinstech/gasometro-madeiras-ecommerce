'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    background-color: white;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
  --red: #E84E0E; 
  --red-dark: #BA3E0B;
  --red-light: #FDEDE7;
  --white: #FFFF;
  --gray: #F2F2F2;
  --gray-02: #FAFAFA;
  --gray-03: #F5F5F5;
  --gray-04: #F0F0F0;
  --gray-05: #D9D9D9;
  --gray-06: #BFBFBF;
  --gray-07: #B0B0B0;
  --gray-08: #595959;
  --gray-09: #434343;
  --black: #000000;
  --body-font: 'pt', sans;
  --margin-global: 0 7rem;
  --max-width: 1217px;
}
`

export default GlobalStyle
