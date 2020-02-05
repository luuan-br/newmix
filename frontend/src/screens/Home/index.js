import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import AsideBar from "../../components/AsideBar";
import ListItem from "../../components/AsideItems";
import ShowcaseProductsCatalog from "../../components/ShowcaseProductsCatalog";

import { List } from "./styles";

export default function Home() {
	const [id, setId] = useState("");
	const { loading, error, data } = useQuery(GET_CATALOGS, {
		variables: { all: false }
	});

	return (
		<>
			<AsideBar itens={"sadsad"}>
				{loading && <p>Carregando</p>}

				{error && <p>error: {error.message}</p>}

				{data && data.catalogs && data.catalogs.length && (
					<List className="catalog-list">
						{data.catalogs.map(catalog => (
							<ListItem
								key={catalog._id}
								item={catalog}
								onClick={() => setId(catalog._id)}
							/>
						))}
					</List>
				)}
			</AsideBar>
			<div>
				<ShowcaseProductsCatalog id={id} />
			</div>
		</>
	);
}

const GET_CATALOGS = gql`
	query Catalogs($all: Boolean) {
		catalogs(all: $all) {
			_id
			name
		}
	}
`;
