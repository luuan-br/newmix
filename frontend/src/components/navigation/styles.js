import styled from "styled-components";

export const Container = styled.nav`
	display: grid;
	grid-auto-columns: 1fr;
	justify-content: center;
	border-right: solid 0.5px rgba(0, 0, 0, 0.1);

	ul.nav-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
