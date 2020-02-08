import React, { useState } from "react";

import AsideBar from "../../components/AsideBar";
import { ListConteiner, ListItem } from "../../components/List";

import SelectCategories from "../../components/SelectCategories";
import SelectCatlogs from "../../components/SelectCatalogs";
import Input from "../../components/Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "50%"
		}
	}
}));

export default function Dashboard() {
	const [changeComponent, setChageComponet] = useState("products");
	const classes = useStyles();

	return (
		<>
			<AsideBar>
				<ListConteiner>
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
				</ListConteiner>
			</AsideBar>

			<div render={changeComponent}>
				{changeComponent === "products" && (
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
					>
						<Input id="name-input" label="Nome" />
						<Input id="code-input" label="codigo" />
						<SelectCategories />
						<SelectCatlogs />
					</form>
				)}
				{changeComponent === "categories" && <p>categorias</p>}
				{changeComponent === "catelogs" && <p>catalogos</p>}
			</div>
		</>
	);
}
