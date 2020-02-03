import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// import { Container } from './styles';

const GET_CATEGORIES = gql`
	query Categories($all: Boolean) {
		categories(all: $all) {
			_id
			name
			active
		}
	}
`;

export default function Categories() {
	const [active, setActive] = useState(false);
	const { loading, error, data } = useQuery(GET_CATEGORIES, {
		variables: { all: active }
		// fetchPolicy: "network-only"
	});

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<div>
			{data.categories.map(category => (
				<li key={category._id}>{category.name}</li>
			))}

			<button onClick={() => setActive(!active)}>toogle</button>
		</div>
	);
}
