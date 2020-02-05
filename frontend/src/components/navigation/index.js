import React from "react";
import NavItems from "../NavItems";

// import icones
import iconeHome from "../../assets/Home-3.png";
import iconeCategory from "../../assets/Caminho_16.png";
import iconeAdmin from "../../assets/privacy.png";
import iconeHelp from "../../assets/faq-2.png";

import { Container } from "./styles";

export default function Navigation() {
	return (
		<Container id="nav">
			<ul className="nav-list">
				<NavItems to="" img={iconeHome} name="Home" />
				<NavItems to="products" img={iconeCategory} name="Categorias" />
				<NavItems to="help" img={iconeHelp} name="Suporte" />
				<NavItems to="dashboard" img={iconeAdmin} name="Log In" />
			</ul>
		</Container>
	);
}
