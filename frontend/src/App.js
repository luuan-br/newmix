import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./services/api";

import Global from "./styles/globo";
import Header from "./components/Header";
// import Categories from "./components/Categories";
// import NewCatalog from "./components/NewCatalog";
import Catalogs from "./components/Catalogs";

function App() {
	return (
		<ApolloProvider client={client}>
			<Global />
			<Header />
			{/* <Categories /> */}
			{/* <NewCatalog /> */}
			<Catalogs />
		</ApolloProvider>
	);
}

export default App;
