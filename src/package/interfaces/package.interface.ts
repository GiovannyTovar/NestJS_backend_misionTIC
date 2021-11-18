import { ProductEntity } from "src/product/entities/product.entity";

export interface IPackage{
    readonly package_id?: number;
    readonly package_name: string;
    readonly package_description: string;
    readonly package_x_units: number;
    readonly package_base_price: number;
    readonly package_state: boolean;
    readonly product?: ProductEntity; // aca el dto de producto
}