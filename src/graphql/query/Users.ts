import { gql } from '@apollo/client';

export const MUTATION_UPDATE_USER = gql`
    mutation UpdateUser($input: UpdateUserProfileInput!) {
        updateUser(input: $input) {
            access_token
            refresh_token
        }
    }
`;

export const MUTATION_DELETE_User = gql`
    mutation DeleteUser($input: String!) {
        deleteUser(id: $input)
    }
`;

export const MUTATION_UPDATE_ROLE = gql`
    mutation UpdateRole($input:
        role: [UserType!]!
        id: String!) 
    {
        updateRole(input: $input) {
            access_token
            refresh_token
        }
    }
`;



