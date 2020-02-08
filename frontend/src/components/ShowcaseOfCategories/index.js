import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Showcase from "../Showcase";

// import { Container } from './styles';

export default function ShowcaseOfCategories({ id }) {
	const { loading, error, data } = useQuery(GET_PRODUCTS, {
		variables: { id: id }
		// fetchPolicy: "cache-and-network"
	});

	const type = "category";

	if (data && data[type] == null) return "sem produtos";

	return (
		<>
			{loading && <p>Carregando</p>}

			{error && <p>error: {error.message}</p>}

			<h1>{data && data[type]?.name}</h1>

			{data && data[type] && <Showcase type={type} data={data} />}
		</>
	);
}

const GET_PRODUCTS = gql`
	query Category($id: String) {
		category(filter: { _id: $id }) {
			_id
			name
			products {
				_id
				name
				code
				images {
					_id
					name
					url_image
				}
			}
		}
	}
`;
