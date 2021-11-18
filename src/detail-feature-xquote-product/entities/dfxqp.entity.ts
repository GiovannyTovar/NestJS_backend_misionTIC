import { QuoteDetailEntity } from "src/quote-detail/entities/quote-detail.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("detail_feature_x_quote_product")
export class DetailFXProductQ{
    @PrimaryGeneratedColumn()
    dfxqp_id: number;

    @Column()
    feature_id: number;

    // Relacion Muchos A Uno con la entidad quote_detail
    @ManyToOne(type => QuoteDetailEntity, quoteDetail => quoteDetail.dfxqp) 
    quoteDetail: QuoteDetailEntity;
}