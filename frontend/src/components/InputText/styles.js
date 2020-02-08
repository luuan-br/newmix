import styled from "styled-components";

export const Container = styled.div`
	width: 50%;
	position: relative;
	height: 40px;
	overflow: hidden;
	margin-bottom: 15px;
	margin-top: 15px;
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	color: #595f6e;
	padding-top: 20px;
	padding-bottom: 5px;
	border: none;
	outline: none;
	background: none;

	&:focus + .label-name .content-name,
	&:valid + .label-name .content-name {
		transform: translateY(-150%);
		font-size: 12px;
		color: #5fa8d3;
	}

	&:focus + .label-name::after,
	&:valid + .label-name::after {
		transform: translateX(0%);
	}
`;

export const Label = styled.label`
	position: absolute;
	bottom: 0px;
	left: 0%;
	width: 100%;
	height: 100%;
	pointer-events: none;
	border-bottom: 1px solid black;

	&::after {
		content: "";
		position: absolute;
		left: 0px;
		bottom: -1px;
		height: 100%;
		width: 100%;
		border-bottom: 3px solid #5fa8d3;
		transform: translateX(-100%);
		transition: all 0.3s ease;
	}
`;

export const Text = styled.span`
	position: absolute;
	bottom: 5px;
	left: 0;
	transition: all 0.3s ease;
	text-transform: capitalize;
`;
