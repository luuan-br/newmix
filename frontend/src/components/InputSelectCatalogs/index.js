import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Select from "react-select";

// import { Container } from './styles';

export default function InputSelectCatalogs() {
	const [selectedOption, setSelectedOption] = useState([]);
	const { data } = useQuery(GET_CATALOGS, {
		variables: { all: false }
	});

	return (
		<div>
			Catalogos
			<Select
				value={selectedOption}
				onChange={text => setSelectedOption(text)}
				isMulti={true}
				options={
					data &&
					data.catalogs &&
					data.catalogs.map(catalog => ({
						value: catalog.name,
						label: catalog.name,
						_id: catalog._id
					}))
				}
			/>
		</div>
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
