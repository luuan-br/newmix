import React from "react";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
// import AsideBar from "../components/AsideBar";

import { Container } from "./styles";

export default function Layout({ children }) {
	return (
		<Container id="#layout">
			<Header />
			<Navigation />
			<main id="main">
				{/* <AsideBar /> */}
				{children}
			</main>
		</Container>
	);
}
