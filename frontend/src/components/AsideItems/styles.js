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
	/* background-color: #e9eaec; */
	height: 45px;
	border-radius: 50px;
	margin: 15px 0;
	background-image: linear-gradient(
		45deg,
		#77a5f855,
		#d5a3ff65,
		#6a707b35,
		#d1d1d135
	);
	background-size: 300%;
	background-position: right;
	transition: background-position 1s;

	&:hover,
	&:focus {
		background-position: left;
	}

	&:hover p {
		background-image: linear-gradient(45deg, #7092eb, #d5a3ff);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

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
