import { PackageEntity } from "src/package/entities/package.entity";
import { IProduct } from "../interfaces/product.interface";

export class ProductDTO implements IProduct{
    product_id: number;
    product_name: string;
    product_description: string;
    product_photoURL: string;
    product_state: boolean;
    packages?: PackageEntity[]; 
}