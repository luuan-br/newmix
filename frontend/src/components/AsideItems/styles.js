import styled from "styled-components";

export const ListItem = styled.li`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 20px;
	align-items: center;

	width: 80%;
	position: relative;
	background-color: #e9eaec;
	height: 45px;
	border-radius: 50px;
	margin: 15px 0;

	& + li {
		margin-top: 0;
	}

	p {
		text-transform: capitalize;
		color: #afafaf;
		font-size: 1.1em;

		&::selection {
			background: none;
			border: none;
			outline: none;
		}
	}

	img::selection {
		background: none;
		border: none;
		outline: none;
	}
`;
