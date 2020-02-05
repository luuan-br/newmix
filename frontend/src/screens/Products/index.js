import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import AsideBar from "../../components/AsideBar";
import ListItem from "../../components/AsideItems";
import ShowcaseProductsCategoreis from "../../components/ShowcaseProductsCategories";

import { List } from "./styles";

export default function Products() {
	const [id, setId] = useState("");
	const { loading, error, data } = useQuery(GET_CATEGORIES, {
		variables: { all: false }
	});

	return (
		<>
			<AsideBar>
				{loading && <p>Carregando</p>}

				{error && <p>error: {error.message}</p>}

				{data && data.categories && data.categories.length && (
					<List className="catalog-list">
						{data.categories.map(category => (
							<ListItem
								key={category._id}
								item={category}
								onClick={() => setId(category._id)}
							/>
						))}
					</List>
				)}
			</AsideBar>
			<div>
				<ShowcaseProductsCategoreis id={id} />
			</div>
		</>
	);
}

const GET_CATEGORIES = gql`
	query Categories($all: Boolean) {
		categories(all: $all) {
			_id
			name
		}
	}
`;
