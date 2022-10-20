import { gql } from '@apollo/client';

export const QUERY_GET_PROJECT_BY_ID = gql`
    mutation Signin($input: SigninInput!) {
        signin(input: $input) {
            access_token
            refresh_token
        }
    }
`;