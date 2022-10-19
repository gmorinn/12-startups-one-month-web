export type UUID = string

export type Role = 'user' | 'admin' | 'pro'

export type Header = {
    jwtToken?: string,
    "Content-Type"?: string,
}

export type User = {
    id : UUID,
    email: string,
}

export type ErrorAPI = {
    
}

export type SignUpParams = {
    email: string,
    password: string,
    confirm_password: string,
}

export type SigninInput = {
    email: string,
    password: string,
}

export type TypeInput = "text" | "password" | "file" | "number" | "password" | "phone" | "date" | "email"