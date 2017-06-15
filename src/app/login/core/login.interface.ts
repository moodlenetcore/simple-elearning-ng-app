export interface RegisterModel {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginModel {
    email: string;
    password: string;
    rememberMe: boolean;
}

export const FormStatus = {
    valid: 'VALID',
    invalid: 'INVALID',
    pending: 'PENDING',
    disabled: 'DISABLED',
}