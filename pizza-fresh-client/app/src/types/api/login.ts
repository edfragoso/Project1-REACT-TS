import { User } from './user';

export interface Login {
    nickname: string;
    passord: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}