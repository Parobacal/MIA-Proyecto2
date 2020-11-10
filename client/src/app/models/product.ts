export interface Product {
    fk_idCategory: number;
    fk_mail: string;
    image?: File;
    name: string;
    product_detail: string;
    key_words: string;
    price: number;
    likes: number;
    deslikes: number;
    state: number
}