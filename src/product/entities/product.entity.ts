import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class ProductEntity{
    @PrimaryGeneratedColumn()
    produc_id: number;

    @Column()
    product_name: string;

    @Column()
    product_description: string;

    @Column({default: 'http://www.google.com'})
    product_photoURL: string;

    @Column({default: 1})
    product_state: boolean;

}