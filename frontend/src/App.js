import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./services/api";

import Global from "./styles/globo";
import Layout from "./Layout";

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Global />
				<Layout>
					<Routes />
				</Layout>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
