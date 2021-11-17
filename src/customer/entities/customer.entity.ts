import { QuoteEntity } from "src/quote/entities/quote.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export class CustomerEntity{
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column()
    customer_dni: string;

    @Column()
    customer_name: string;

    @Column()
    customer_phone: string;

    // Relacion Uno A Muchos con la entidad quotes
    @OneToMany(type => QuoteEntity, quote => quote.customer)
    quotes: QuoteEntity[]
}