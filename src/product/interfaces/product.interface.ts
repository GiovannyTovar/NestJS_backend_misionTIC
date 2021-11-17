import { PackageEntity } from "src/package/entities/package.entity";

export interface IProduct{
    readonly product_id?: number;
    readonly product_name: string ;
    readonly product_description: string;
    readonly product_photoURL: string;
    readonly product_state: boolean;
    readonly packages?: PackageEntity[];
}