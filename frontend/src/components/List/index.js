import React from "react";

import { List, Item } from "./styles";

export function ListConteiner({ children }) {
	return <List>{children}</List>;
}

export function ListItem({ item, onClick }) {
	const custumOnClicl = event => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<Item onClick={custumOnClicl}>
			<p>{item.name}</p>
			<img
				src={require("../../assets/Grupo_36_active.png")}
				alt={item.name}
			/>
		</Item>
	);
}
