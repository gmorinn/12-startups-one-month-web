import { gql } from '@apollo/client';

export const MUTATION_CREATE_AVIS = gql`
    mutation CreateAvis($input: AvisCreateInput!) {
        createAvis(input: $input) {
            id
            created_at
            deleted_at
            updated_at
            user_id_target
            user_id_writer
            note
            comment
        }
    }
`;

export const MUTATION_UPDATE_AVIS = gql`
    mutation UpdateAvis($input: AvisUpdateInput!) {
        updateAvis(input: $input) {
            id
            created_at
            deleted_at
            updated_at
            user_id_target
            user_id_writer
            note
            comment
        }
    }
`;

export const MUTATION_DELETE_AVIS = gql`
    mutation DeleteAvis($input: String!) {
        deleteAvis(id: $input)
    }
`;


