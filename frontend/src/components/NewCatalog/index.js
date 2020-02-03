import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

// import { Container } from './styles';

const NEW_CATALOG = gql`
	mutation NewCatalog($name: String!) {
		newCatalog(data: { name: $name }) {
			_id
			name
		}
	}
`;

export default function NewCatalog() {
	const [name, setName] = useState("");
	const [form, { error }] = useMutation(NEW_CATALOG, {
		errorPolicy: "ignore",
		onError: handleError
	});

	function handleForm(e) {
		e.preventDefault();
		form({ variables: { name } });
		setName("");
	}

	// tratamento de erros
	function handleError({ graphQLErrors, networkError }) {
		if (graphQLErrors)
			graphQLErrors.map(({ message, locations, path }) =>
				console.log(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
				)
			);

		if (networkError) console.log(`[Network error]: ${networkError}`);
	}

	return (
		<div>
			{error ? <p>Oh no! {error.message}</p> : null}
			<form onSubmit={handleForm}>
				<input
					name="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<button type="submit">Add Catalog</button>
			</form>
		</div>
	);
}
