import { gql } from '@apollo/client';

export const MUTATION_ADD_VIEWER = gql`
    mutation AddViewer($input: String!) {
        addViewer(user_viewed: $input) {
            id
            created_at
            deleted_at
            updated_at
            user_id_viewer
            profile_id_viewed
            date_viewed
        }
    }
`;