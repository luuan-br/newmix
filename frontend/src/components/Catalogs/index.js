import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

// import { Container } from './styles';

const GET_CATALOGS = gql`
	query Categories($all: Boolean, $offset: Int, $limit: Int) {
		catalogs(all: $all, offset: $offset, limit: $limit) {
			_id
			name
			active
		}
	}
`;

export default function Catalogs() {
	const { loading, error, data, fetchMore } = useQuery(GET_CATALOGS, {
		variables: { all: true, offset: 0, limit: 2 },
		fetchPolicy: "cache-and-network"
	});

	// pesquisar por: Relay-style cursor pagination (paginacao infinita)
	// estou utilizando uma paginacao normal (paginacao por paginas)
	function onHandleLoad() {
		fetchMore({
			variables: {
				offset: data.catalogs.length
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return Object.assign({}, prev, {
					catalogs: [...prev.catalogs, ...fetchMoreResult.catalogs]
				});
			}
		});
	}

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<div>
			{data.catalogs.map(catalog => (
				<li key={catalog._id}>{catalog.name}</li>
			))}
			<button onClick={onHandleLoad}>carregar mais</button>
		</div>
	);
}
