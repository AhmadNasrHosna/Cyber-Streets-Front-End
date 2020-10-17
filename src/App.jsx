import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./screens";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/?access_token=${process.env.REACT_APP_CDA_TOKEN}`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Home />
      </Router>
    </ApolloProvider>
  );
}

export default App;
