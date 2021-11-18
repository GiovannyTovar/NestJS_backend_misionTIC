import { DetailFXProductQ } from "src/detail-feature-xquote-product/entities/dfxqp.entity";
import { PackageEntity } from "src/package/entities/package.entity";
import { QuoteEntity } from "src/quote/entities/quote.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("quote_detail")
export class QuoteDetailEntity{

    @PrimaryGeneratedColumn()
    quote_detail_id: number;

    @Column()
    quote_units: number;

    // Relacion Muchos a Uno con la entidad packages
    @ManyToOne(type => PackageEntity, packages => packages.quoteDetails)
    packages: PackageEntity;

    // Relacion Muchos a Uno con la entidad quotes
    @ManyToOne(type => QuoteEntity, quote => quote.quoteDetail) 
    quote: QuoteEntity;

    // Relacion Uno A Muchos con la entidad detail_feature_x_quote_product
    @OneToMany(type => DetailFXProductQ, dfxqp => dfxqp.quote)   
    dfxqp: DetailFXProductQ[];
}