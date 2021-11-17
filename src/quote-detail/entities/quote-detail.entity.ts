import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("quote_detail")
export class QuoteDetailEntity{
    
    @PrimaryGeneratedColumn()
    quote_detail_id: number;

    @Column()
    quote_units: number;

    // Relacion Muchos a Uno con la entidad packages
    @ManyToOne(type => PackageEntity, packages => packages.quoteDetail)
    packages: PackageEntity;
}