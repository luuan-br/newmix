import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Select from "react-select";

// import { Container } from './styles';

export default function InputSelectCategories() {
	const [selectedOption, setSelectedOption] = useState([]);
	const { data } = useQuery(GET_CATEGORIES, {
		variables: { all: false }
	});

	return (
		<div>
			Categories
			<Select
				value={selectedOption}
				onChange={text => setSelectedOption(text)}
				isMulti={true}
				options={
					data &&
					data.categories &&
					data.categories.map(catalog => ({
						value: catalog.name,
						label: catalog.name,
						_id: catalog._id
					}))
				}
			/>
		</div>
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
