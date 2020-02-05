import styled from "styled-components";

export const Container = styled.header`
	display: grid;
	grid-template-columns: 100px 250px 1fr 100px;
	justify-items: center;
	align-items: center;

	form {
		display: block;
		width: 80%;
		position: relative;
		background-color: #e9eaec;
		height: 35px;
		border-radius: 50px;
		overflow: hidden;
		input {
			position: absolute;
			width: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border: none;
			background: none;
			padding: 5px 15px;
		}
	}
`;
