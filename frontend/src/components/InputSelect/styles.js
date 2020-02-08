import styled from "styled-components";

export const Container = styled.div`
	width: 50%;
	position: relative;
	height: 40px;
	margin-bottom: 15px;
	margin-top: 15px;
`;

export const Input = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding-bottom: 5px;
	border-bottom: 1px solid black;
`;

export const Selected = styled.span`
	background: #ccc;
	border-radius: 5px;
	padding: 2px 5px;
	margin-right: 5px;
	text-transform: capitalize;
	font-size: 12px;
	cursor: pointer;
`;

export const Toggle = styled.div`
	width: 100%;
	background: #fff;
	margin-top: 5px;
	border-radius: 2px;
	padding: 5px 0;

	p {
		padding: 5px 10px;
		&:hover {
			background-color: #09a1e940;
		}
	}
`;

export const Label = styled.span`
	position: absolute;
	transform: translateY(-150%);
	font-size: 12px;
	color: #5fa8d3;
`;
