import { IProduct } from "../interfaces/product.interface";

export class CreateProductDTO{
    product_name: string;
    product_description: string;
    product_photoURL: string;
    product_state: boolean;
}