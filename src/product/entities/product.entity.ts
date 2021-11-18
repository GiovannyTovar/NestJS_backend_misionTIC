import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({unique:true})
    product_name: string;

    @Column()
    product_description: string;

    @Column({default: 'http://www.google.com'})
    product_photoURL: string;

    @Column({default: 1})
    product_status: boolean;

    //Relacion Uno a Muchos con la entidad packages
    @OneToMany(type => PackageEntity, packages => packages.product) 
    packages: PackageEntity[]; 
}