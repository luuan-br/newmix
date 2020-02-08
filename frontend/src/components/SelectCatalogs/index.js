import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Select from "../Select";

// import { Container } from './styles';

export default function InputSelectCatalogs() {
	const [options, setOptions] = useState([]);
	const { data } = useQuery(GET_CATALOGS, {
		variables: { all: false }
	});

	useEffect(() => {
		async function handleOptions() {
			if (data) {
				setOptions(data.catalogs);
			}
		}
		handleOptions();
	}, [data]);

	return <Select options={options} name="Catalogos" />;
}

const GET_CATALOGS = gql`
	query Catalogs($all: Boolean) {
		catalogs(all: $all) {
			_id
			name
		}
	}
`;
