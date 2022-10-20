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

export enum FormuleType {
  Basic = 'BASIC',
  Diamond = 'DIAMOND',
  Gold = 'GOLD',
  None = 'NONE'
}

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
  /** use to refresh the access token */
  refresh: JwtResponse;
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


export type MutationRefreshArgs = {
  refresh_token: Scalars['JWT'];
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
  badge: Scalars['Boolean'];
  city?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  deleted_at?: Maybe<Scalars['Time']>;
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  formule?: Maybe<FormuleType>;
  goals?: Maybe<Array<Maybe<GoalType>>>;
  id: Scalars['String'];
  ideal_partner?: Maybe<Scalars['String']>;
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