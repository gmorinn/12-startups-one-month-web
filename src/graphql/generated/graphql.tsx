import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JWT: any;
  Time: any;
  Upload: any;
};

/** all fields that represent an 'avis' */
export type Avis = {
  __typename?: 'Avis';
  comment: Scalars['String'];
  created_at: Scalars['Time'];
  deleted_at?: Maybe<Scalars['Time']>;
  id: Scalars['String'];
  note: Scalars['Int'];
  updated_at: Scalars['Time'];
  user_id_target: Scalars['String'];
  user_id_writer: Scalars['String'];
};

/** payload send when a user give an avis */
export type AvisCreateInput = {
  /** comment of the avis */
  comment: Scalars['String'];
  /** note of the avis */
  note: Scalars['Int'];
  /** correspond of the user who receive the avis */
  user_id_target: Scalars['String'];
  /** correspond of the user who give the avis */
  user_id_writer: Scalars['String'];
};

/** payload send when a user give an avis */
export type AvisUpdateInput = {
  /** comment of the avis */
  comment: Scalars['String'];
  /** correspond the id of the avis existing */
  id: Scalars['String'];
  /** note of the avis */
  note: Scalars['Int'];
};

export enum GoalType {
  /** User wants to work on his endurance */
  Cardio = 'CARDIO',
  /** User wants to maintain his weight */
  GarderLaForme = 'GARDER_LA_FORME',
  /** User wants to lose weight */
  PerteDePoids = 'PERTE_DE_POIDS',
  /** User wants to have performance */
  PriseDeForce = 'PRISE_DE_FORCE',
  /** User wants to gain weight */
  PriseDeMasse = 'PRISE_DE_MASSE',
  /** User wants to gain muscle */
  PriseDeMuscle = 'PRISE_DE_MUSCLE'
}

export type JwtResponse = {
  __typename?: 'JWTResponse';
  /** jwt token for user to authenticate, contains user id, role and expiry */
  access_token: Scalars['JWT'];
  /** use to refresh the access token */
  refresh_token: Scalars['JWT'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** add a viewer based on the user's id and the profil id viewed */
  addViewer: Viewer;
  /** create an avis */
  createAvis: Avis;
  /** delete an avis */
  deleteAvis: Scalars['Boolean'];
  /** delete a user */
  deleteUser: Scalars['Boolean'];
  /** use for user who has forgot a password and want a code to change it */
  lost: SendCodeResponse;
  /** use to refresh the access token */
  refresh: JwtResponse;
  /** use for user who want to change a password with the code given by email */
  resetPassword: Scalars['Boolean'];
  /** connect a user to the application */
  signin: JwtResponse;
  /** create a new user */
  signup: JwtResponse;
  /** upload a file */
  singleUpload: UploadResponse;
  /** update an avis */
  updateAvis: Avis;
  /** update the user's role */
  updateRole: User;
  /** update a user */
  updateUser?: Maybe<User>;
};


export type MutationAddViewerArgs = {
  user_viewed: Scalars['String'];
};


export type MutationCreateAvisArgs = {
  input: AvisCreateInput;
};


export type MutationDeleteAvisArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLostArgs = {
  email: Scalars['String'];
};


export type MutationRefreshArgs = {
  refresh_token: Scalars['JWT'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSigninArgs = {
  input: SigninInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationSingleUploadArgs = {
  file: UploadInput;
};


export type MutationUpdateAvisArgs = {
  input: AvisUpdateInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['String'];
  role: Array<UserType>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserProfileInput;
};

export enum Performance {
  /** Curl barre */
  CurlBarre = 'CURL_BARRE',
  /** Developpe couche */
  DeveloppeCouche = 'DEVELOPPE_COUCHE',
  /** Developpe epaule */
  DeveloppeEpaule = 'DEVELOPPE_EPAULE',
  /** Developpe incline */
  DeveloppeIncline = 'DEVELOPPE_INCLINE',
  /** Hip thrust */
  HipThrust = 'HIP_THRUST',
  /** Leg curl */
  LegCurl = 'LEG_CURL',
  /** Leg extension */
  LegExtension = 'LEG_EXTENSION',
  /** Leg press */
  LegPress = 'LEG_PRESS',
  /** Souleve terre */
  SouleveTerre = 'SOULEVE_TERRE',
  /** Squat */
  Squat = 'SQUAT'
}

export type Query = {
  __typename?: 'Query';
  /** returns all the AVIS of a user based on his id */
  getAvisByUserId?: Maybe<Array<Maybe<Avis>>>;
  /** returns all the views of a user based on his id */
  getViewsByUserId?: Maybe<Array<Maybe<Viewer>>>;
  /** returns one user by his id precising in the payload */
  user?: Maybe<User>;
  /** returns all users with a limit precising in the payload */
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetAvisByUserIdArgs = {
  id: Scalars['String'];
};


export type QueryGetViewsByUserIdArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type ResetPasswordInput = {
  /** code given by email to change the password */
  code: Scalars['String'];
  /** confirm password of the user */
  confirm_password: Scalars['String'];
  /** email of the user */
  email: Scalars['String'];
  /** new password of the user */
  password: Scalars['String'];
};

export type SendCodeResponse = {
  __typename?: 'SendCodeResponse';
  /** email of the user */
  email: Scalars['String'];
  /** code given by email to change the password */
  success: Scalars['Boolean'];
};

export enum SexeType {
  Man = 'MAN',
  None = 'NONE',
  Other = 'OTHER',
  Woman = 'WOMAN'
}

export type SigninInput = {
  /** email of the user */
  email: Scalars['String'];
  /** password of the user */
  password: Scalars['String'];
};

export type SignupInput = {
  /** confirm password of the user */
  confirm_password: Scalars['String'];
  /** email of the user */
  email: Scalars['String'];
  /** password of the user */
  password: Scalars['String'];
};

/** payload send when you a user want to update his profile */
export type UpdateUserProfileInput = {
  /** age of the user */
  age?: InputMaybe<Scalars['Int']>;
  /** city of the user */
  city?: InputMaybe<Scalars['String']>;
  /** email of the user (required) */
  email: Scalars['String'];
  /** firstname of the user */
  firstname?: InputMaybe<Scalars['String']>;
  /** goals of the user */
  goals?: InputMaybe<Array<GoalType>>;
  /** id of the user (required) */
  id: Scalars['String'];
  /** description of his ideal partner */
  ideal_partner?: InputMaybe<Scalars['String']>;
  /** lastname of the user */
  lastname?: InputMaybe<Scalars['String']>;
  /** url of the profile picture */
  profile_picture?: InputMaybe<Scalars['String']>;
  /** sexe of the user */
  sexe?: InputMaybe<SexeType>;
};

export type UploadInput = {
  /** The file to upload */
  file: Scalars['Upload'];
  /** height of the image if it needs to be resized */
  height?: InputMaybe<Scalars['Int']>;
  /** width of the image if it needs to be resized */
  width?: InputMaybe<Scalars['Int']>;
};

/** The `File` type, represents the response of uploading a file. */
export type UploadResponse = {
  __typename?: 'UploadResponse';
  name: Scalars['String'];
  size: Scalars['Int'];
  success: Scalars['Boolean'];
  url: Scalars['String'];
};

/** All fields that represent a user */
export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  ask: Scalars['Int'];
  city?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  deleted_at?: Maybe<Scalars['Time']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  goals?: Maybe<Array<Maybe<GoalType>>>;
  id: Scalars['String'];
  ideal_partner?: Maybe<Scalars['String']>;
  is_premium: Scalars['Boolean'];
  lastname?: Maybe<Scalars['String']>;
  profile_picture?: Maybe<Scalars['String']>;
  role: Array<UserType>;
  sexe?: Maybe<SexeType>;
  updated_at: Scalars['Time'];
};

export enum UserType {
  /** User can have access to all data */
  Admin = 'ADMIN',
  /** User can access specific data but not all */
  Pro = 'PRO',
  /** User can only see their own data */
  User = 'USER'
}

/** All fields that represent the table viewers */
export type Viewer = {
  __typename?: 'Viewer';
  created_at: Scalars['Time'];
  /** the date where the viewer was watching the profile */
  date_viewed: Scalars['Time'];
  deleted_at?: Maybe<Scalars['Time']>;
  id: Scalars['String'];
  /** The name of the profile he is viewing */
  profile_id_viewed: Scalars['String'];
  updated_at: Scalars['Time'];
  /** The name of the viewer */
  user_id_viewer: Scalars['String'];
};

export type SigninMutationVariables = Exact<{
  input: SigninInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'JWTResponse', access_token: any, refresh_token: any } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'JWTResponse', access_token: any, refresh_token: any } };

export type RefreshTokenMutationVariables = Exact<{
  input: Scalars['JWT'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refresh: { __typename?: 'JWTResponse', access_token: any, refresh_token: any } };

export type SendCodeMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type SendCodeMutation = { __typename?: 'Mutation', lost: { __typename?: 'SendCodeResponse', email: string, success: boolean } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type CreateAvisMutationVariables = Exact<{
  input: AvisCreateInput;
}>;


export type CreateAvisMutation = { __typename?: 'Mutation', createAvis: { __typename?: 'Avis', id: string, created_at: any, deleted_at?: any | null, updated_at: any, user_id_target: string, user_id_writer: string, note: number, comment: string } };

export type UpdateAvisMutationVariables = Exact<{
  input: AvisUpdateInput;
}>;


export type UpdateAvisMutation = { __typename?: 'Mutation', updateAvis: { __typename?: 'Avis', id: string, created_at: any, deleted_at?: any | null, updated_at: any, user_id_target: string, user_id_writer: string, note: number, comment: string } };

export type DeleteAvisMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type DeleteAvisMutation = { __typename?: 'Mutation', deleteAvis: boolean };

export type AddViewerMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type AddViewerMutation = { __typename?: 'Mutation', addViewer: { __typename?: 'Viewer', id: string, created_at: any, deleted_at?: any | null, updated_at: any, user_id_viewer: string, profile_id_viewed: string, date_viewed: any } };


export const SigninDocument = gql`
    mutation Signin($input: SigninInput!) {
  signin(input: $input) {
    access_token
    refresh_token
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    access_token
    refresh_token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($input: JWT!) {
  refresh(refresh_token: $input) {
    access_token
    refresh_token
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const SendCodeDocument = gql`
    mutation SendCode($input: String!) {
  lost(email: $input) {
    email
    success
  }
}
    `;
export type SendCodeMutationFn = Apollo.MutationFunction<SendCodeMutation, SendCodeMutationVariables>;

/**
 * __useSendCodeMutation__
 *
 * To run a mutation, you first call `useSendCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCodeMutation, { data, loading, error }] = useSendCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendCodeMutation, SendCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCodeMutation, SendCodeMutationVariables>(SendCodeDocument, options);
      }
export type SendCodeMutationHookResult = ReturnType<typeof useSendCodeMutation>;
export type SendCodeMutationResult = Apollo.MutationResult<SendCodeMutation>;
export type SendCodeMutationOptions = Apollo.BaseMutationOptions<SendCodeMutation, SendCodeMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateAvisDocument = gql`
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
export type CreateAvisMutationFn = Apollo.MutationFunction<CreateAvisMutation, CreateAvisMutationVariables>;

/**
 * __useCreateAvisMutation__
 *
 * To run a mutation, you first call `useCreateAvisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAvisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAvisMutation, { data, loading, error }] = useCreateAvisMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAvisMutation(baseOptions?: Apollo.MutationHookOptions<CreateAvisMutation, CreateAvisMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAvisMutation, CreateAvisMutationVariables>(CreateAvisDocument, options);
      }
export type CreateAvisMutationHookResult = ReturnType<typeof useCreateAvisMutation>;
export type CreateAvisMutationResult = Apollo.MutationResult<CreateAvisMutation>;
export type CreateAvisMutationOptions = Apollo.BaseMutationOptions<CreateAvisMutation, CreateAvisMutationVariables>;
export const UpdateAvisDocument = gql`
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
export type UpdateAvisMutationFn = Apollo.MutationFunction<UpdateAvisMutation, UpdateAvisMutationVariables>;

/**
 * __useUpdateAvisMutation__
 *
 * To run a mutation, you first call `useUpdateAvisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvisMutation, { data, loading, error }] = useUpdateAvisMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAvisMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvisMutation, UpdateAvisMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvisMutation, UpdateAvisMutationVariables>(UpdateAvisDocument, options);
      }
export type UpdateAvisMutationHookResult = ReturnType<typeof useUpdateAvisMutation>;
export type UpdateAvisMutationResult = Apollo.MutationResult<UpdateAvisMutation>;
export type UpdateAvisMutationOptions = Apollo.BaseMutationOptions<UpdateAvisMutation, UpdateAvisMutationVariables>;
export const DeleteAvisDocument = gql`
    mutation DeleteAvis($input: String!) {
  deleteAvis(id: $input)
}
    `;
export type DeleteAvisMutationFn = Apollo.MutationFunction<DeleteAvisMutation, DeleteAvisMutationVariables>;

/**
 * __useDeleteAvisMutation__
 *
 * To run a mutation, you first call `useDeleteAvisMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAvisMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAvisMutation, { data, loading, error }] = useDeleteAvisMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAvisMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAvisMutation, DeleteAvisMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAvisMutation, DeleteAvisMutationVariables>(DeleteAvisDocument, options);
      }
export type DeleteAvisMutationHookResult = ReturnType<typeof useDeleteAvisMutation>;
export type DeleteAvisMutationResult = Apollo.MutationResult<DeleteAvisMutation>;
export type DeleteAvisMutationOptions = Apollo.BaseMutationOptions<DeleteAvisMutation, DeleteAvisMutationVariables>;
export const AddViewerDocument = gql`
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
export type AddViewerMutationFn = Apollo.MutationFunction<AddViewerMutation, AddViewerMutationVariables>;

/**
 * __useAddViewerMutation__
 *
 * To run a mutation, you first call `useAddViewerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddViewerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addViewerMutation, { data, loading, error }] = useAddViewerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddViewerMutation(baseOptions?: Apollo.MutationHookOptions<AddViewerMutation, AddViewerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddViewerMutation, AddViewerMutationVariables>(AddViewerDocument, options);
      }
export type AddViewerMutationHookResult = ReturnType<typeof useAddViewerMutation>;
export type AddViewerMutationResult = Apollo.MutationResult<AddViewerMutation>;
export type AddViewerMutationOptions = Apollo.BaseMutationOptions<AddViewerMutation, AddViewerMutationVariables>;