import { gql } from '@apollo/client';

export const MUTATION_SIGNIN = gql`
    mutation Signin($input: SigninInput!) {
        signin(input: $input) {
            access_token
            refresh_token
        }
    }
`;

export const MUTATION_SIGNUP = gql`
    mutation Signup($input: SignupInput!) {
        signup(input: $input) {
            access_token
            refresh_token
        }
    }
`;