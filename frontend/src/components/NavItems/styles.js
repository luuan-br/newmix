import styled from "styled-components";

export const Container = styled.li`
	width: 100%;

	a {
		display: block;
		padding-bottom: 15px;
		padding-top: 15px;
		width: 100%;
		height: 100%;
		border-bottom: solid 0.5px rgba(0, 0, 0, 0.1);
		text-decoration: none;
		font-weight: 700;
		font-size: 1em;
		color: #afafaf;

		&:hover,
		&:active,
		&:focus {
			color: #afafaf;
		}
	}

	figure {
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			margin-bottom: 10px;
		}
	}
`;
