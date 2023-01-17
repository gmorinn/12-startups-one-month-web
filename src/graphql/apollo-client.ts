import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

/* eslint-disable @typescript-eslint/restrict-template-expressions */
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors != null)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError != null) console.log(`[Network error]: ${networkError}`);
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
        'jwtToken': `Bearer ${localStorage.getItem('jwtToken')}`,
        'Content-Type': 'application/json',
    }
});

export default client;