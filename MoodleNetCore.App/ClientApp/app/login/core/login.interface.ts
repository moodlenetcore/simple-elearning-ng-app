export interface LoginModel {
    email: string;
    username: string;
    password: string;
}

export const FormStatus = {
    valid: 'VALID',
    invalid: 'INVALID',
    pending: 'PENDING',
    disabled: 'DISABLED',
}

export interface RegisterModel {
    email: string;
    username: string;
    password: string;
}