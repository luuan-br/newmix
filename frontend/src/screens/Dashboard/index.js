import React, { useState } from "react";

import AsideBar from "../../components/AsideBar";
import ListItem from "../../components/AsideItems";
import InputSelectCatalogs from "../../components/InputSelectCatalogs";
import InputSelectCategories from "../../components/InputSelectCategories";

import { List } from "./styles";

export default function Dashboard() {
	const [changeComponent, setChageComponet] = useState("products");
	return (
		<>
			<AsideBar>
				<List>
					<ListItem
						item={{ name: "cadastra Produto" }}
						onClick={() => setChageComponet("products")}
					/>
					<ListItem
						item={{ name: "cadastra Categoria" }}
						onClick={() => setChageComponet("categories")}
					/>
					<ListItem
						item={{ name: "cadastra Catalogo" }}
						onClick={() => setChageComponet("catelogs")}
					/>
				</List>
			</AsideBar>
			<div render={changeComponent}>
				{changeComponent === "products" && (
					<div>
						<InputSelectCategories />
						<InputSelectCatalogs />
					</div>
				)}
				{changeComponent === "categories" && <p>categorias</p>}
				{changeComponent === "catelogs" && <p>catalogos</p>}
			</div>
		</>
	);
}
