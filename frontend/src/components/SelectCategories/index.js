import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Select from "../Select";

// import { Container } from './styles';

export default function SelectCategories() {
	const [options, setOptions] = useState([]);
	const { data } = useQuery(GET_CATEGORIES, {
		variables: { all: false }
	});

	useEffect(() => {
		async function handleOptions() {
			if (data) {
				setOptions(data.categories);
			}
		}
		handleOptions();
	}, [data]);

	// return <div />;
	return <Select options={options} name="Categorias" />;
}

const GET_CATEGORIES = gql`
	query Categories($all: Boolean) {
		categories(all: $all) {
			_id
			name
		}
	}
`;
