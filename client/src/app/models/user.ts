export interface User {
    name: string;
    lastname: string;
    password: string;
    mail: string;
    image?: File;
    birthdate: string;
    country: string;
    credit: number;
    state: number
}