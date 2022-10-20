export type UUID = string

export type Role = 'user' | 'admin' | 'pro'

export type User = {
    id : UUID,
    email: string,
}

export type ErrorAPI = {
    
}


export type TypeInput = "text" | "password" | "file" | "number" | "password" | "phone" | "date" | "email"