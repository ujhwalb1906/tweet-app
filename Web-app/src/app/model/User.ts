export interface User {
    username?: string;
    token : string;
}

export interface Register {
    email : string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
}