import { ProductEntity } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('packages')
export class PackageEntity{

    @PrimaryGeneratedColumn()
    package_id: number;

    @Column()
    package_name: string;

    @Column()
    package_description: string;

    @Column()
    package_x_units: number;

    @Column()
    package_base_price: number;

    @Column()
    package_state: boolean;
    
    //Relacion Muchos a Uno con la entidad products
    @ManyToOne(type => ProductEntity, product => product.packages) product: ProductEntity;
    

}