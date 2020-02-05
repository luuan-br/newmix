import React from "react";

import { ListItem } from "./styles";

export default function AsideItems({ item, onClick }) {
	const custumOnClicl = event => {
		if (onClick) {
			onClick(event);
		}
	};

	return (
		<ListItem onClick={custumOnClicl}>
			<p>{item.name}</p>
			<img
				src={require("../../assets/Grupo_36_active.png")}
				alt={item.name}
			/>
		</ListItem>
	);
}
