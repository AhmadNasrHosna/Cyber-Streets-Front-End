import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./screens";
import { skipLimitPagination } from './utils/utilities'

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/?access_token=${process.env.REACT_APP_CDA_TOKEN}`,
  cache: new InMemoryCache({
    typePolicies: {
      ResourceCollection: {
        // Default behavoir is to set the cache key as `ResourceCollection(skip:1, limit:1) = {}`
        // Most of the time some primary key is set as an override (ID or _ID) so then it would be ResourceColleciton:1 == {}
        // this is so skip 1 or skip 0 is stored in the same spot
        keyFields: () => "ResourceCollection",
        fields: {
          items: skipLimitPagination()
        }
      }
    }
  }),
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
