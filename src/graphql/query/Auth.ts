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

export const MUTATION_REFRESH_TOKEN = gql`
    mutation RefreshToken($input: JWT!) {
        refresh(refresh_token: $input) {
            access_token
            refresh_token
        }
    }
`;


export const MUTATION_SEND_CODE = gql`
    mutation SendCode($input: String!) {
        lost(email: $input) {
            email
            success
        }
    }
`;

export const MUTATION_RESET_PASSWORD = gql`
    mutation ResetPassword ($input: ResetPasswordInput!) {
        resetPassword(input: $input)
    }
`;
