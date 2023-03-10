export interface userRegister{
    username: string;
    email: string;
    last_name: string;
    password: string;
}

export interface userLogin{
    email: string;
    password: string;
}

export interface responseApi{
    status: string;
}

export interface responseToken{
    token: string;
    user: User;
}

export interface User {
    date_joined: string;
    email: string;
    id: number;
    is_active: boolean;
    last_name: string;
    username: string;
}