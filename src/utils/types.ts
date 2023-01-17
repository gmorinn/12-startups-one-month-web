export type UUID = string;

export type Role = 'user' | 'admin' | 'pro';

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface Header {
    Authorization?: string;
    jwtToken?: string;
    'Content-Type'?: string;
}

export interface User {
    id: UUID;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    avatar: string;
}

// export enum for button type
export enum ButtonType {
    SUBMIT = 'submit',
    BUTTON = 'button',
    RESET = 'reset',
}


export interface SuccessResult {
    success: boolean;
}

export interface ResetPasswordProps {
    email: string;
    password: string;
    confirm_password: string;
    code: string;
}

export interface ResultSendCodeConfirmation {
    success: boolean;
}

export interface ResultJWT {
    access_token: string;
    refresh_token: string;
}

export interface SignupProps {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface ErrorGraphQL {
    message: string;
}

export type TypeInput = 'text' | 'password' | 'file' | 'number' | 'password' | 'phone' | 'date' | 'email';
