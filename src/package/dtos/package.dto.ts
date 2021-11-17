import { ProductEntity } from "src/product/entities/product.entity";
import { IPackage } from "../interfaces/package.interface";

export class PackageDTO implements IPackage{
    package_id?: number;
    package_name: string;
    package_description: string;
    package_x_units: number;
    package_base_price: number;
    package_state: boolean;
    product: ProductEntity;
}