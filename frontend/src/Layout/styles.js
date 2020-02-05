import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	display: grid;
	grid-template-columns: 100px 1fr;
	grid-template-rows: 90px 1fr;
	grid-template-areas:
		"header header"
		"nav main";
	#header {
		grid-area: header;
		background-color: #f7f7f9;
		box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
		z-index: 10;
	}
	#nav {
		grid-area: nav;
		background-color: #f7f7f9;
		/* box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.05); */
	}
	#main {
		grid-area: main;
		overflow-y: scroll;
		background-color: #e9eaec;
		scroll-behavior: smooth;
		display: grid;
		grid-template-columns: 250px 1fr;
	}
`;
