import { CustomerEntity } from "src/customer/entities/customer.entity";
import { QuoteDetailEntity } from "src/quote-detail/entities/quote-detail.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("quotes")
export class QuoteEntity{
    @PrimaryGeneratedColumn()
    quote_id: number;

    @Column({type: 'timestamp', default:() => 'CURRENT_TIMESTAMP'})
    quote_date: Date;

    @Column()
    quote_description: string;

    @Column()
    quote_total: number;

    // Relacion Uno a Muchos con la entidad quote_detail
    @OneToMany(type => QuoteDetailEntity, quoteDetail => quoteDetail.packages)
    quoteDetail: QuoteDetailEntity[];


    // Relacion Muchos A Uno con la entidad customers    
    @ManyToOne(type => CustomerEntity, customer => customer.quotes) 
    customer: CustomerEntity;

}