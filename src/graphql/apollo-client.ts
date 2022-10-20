import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
    credentials: 'same-origin',
});

const client = new ApolloClient({
    link: from([
        errorLink,
        httpLink,
    ]),
    cache: new InMemoryCache(),
    name: 'GM API',
    version: '1.0',
    headers: {
        // "jwtToken": localStorage.getItem("jwtToken") ? `Bearer ${localStorage.getItem("jwtToken")}` : "",
        "Content-Type": "application/json",
    }
});

export default client;