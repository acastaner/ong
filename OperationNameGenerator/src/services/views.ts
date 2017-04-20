import * as enums from "./enums";

export interface AdjectiveDto {
    id: string;

    value?: string;
}

export interface Login {
    email: string;

    password: string;

    rememberMe: boolean;
}

export interface LoginResult {
    status: enums.LoginStatusEnum;

    rememberMe: boolean;
}

export interface VerifyCode {
    provider: string;

    code: string;

    rememberBrowser: boolean;

    rememberMe: boolean;
}

export interface Register {
    email: string;

    password: string;

    confirmPassword?: string;
}

export interface User {
    userName: string;

    logged: boolean;

    emailConfirmed: boolean;

    email: string;

    id: number;

    hasPassword: boolean;
}

export interface ForgotPassword {
    email: string;
}

export interface ResetPassword {
    email?: string;

    userId?: string;

    password: string;

    confirmPassword?: string;

    code?: string;
}

export interface SendCode {
    selectedProvider?: string;

    providers?: string[];

    rememberMe: boolean;
}

export interface AuthenticationDescription {
    items?: { [key: string]: any };

    authenticationScheme?: string;

    displayName?: string;
}

export interface UserLoginInfo {
    loginProvider?: string;

    providerKey?: string;

    providerDisplayName?: string;
}

export interface Role {
    id: number;

    name?: string;
}

export interface ChangePassword {
    oldPassword: string;

    newPassword: string;

    confirmPassword: string;
}

export interface SetPassword {
    newPassword: string;

    confirmPassword?: string;
}

export interface SetEmail {
    email: string;
}

export interface UserSearchFilter {
    name?: string;
}
