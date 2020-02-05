import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// import { Container } from './styles';

export default function ShowcaseProductsCatalog({ id }) {
	const { loading, error, data } = useQuery(GET_PRODUCTS, {
		variables: { id: id }
		// fetchPolicy: "cache-and-network"
	});

	if (data && data.catalog === null) return "sem produtos";

	return (
		<>
			{loading && <p>Carregando</p>}

			{error && <p>error: {error.message}</p>}

			<h1>{data && data.catalog && data.catalog.name}</h1>

			<ul>
				{data &&
					data.catalog &&
					data.catalog.products.map(({ _id, name, code, images }) => (
						<li key={_id}>
							{name}
							{code}
							<ul>
								{images.map(({ _id, name, url_image }) => (
									<li key={_id}>
										{name}
										{url_image}
									</li>
								))}
							</ul>
						</li>
					))}
			</ul>
		</>
	);
}

const GET_PRODUCTS = gql`
	query Catalog($id: String) {
		catalog(filter: { _id: $id }) {
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
