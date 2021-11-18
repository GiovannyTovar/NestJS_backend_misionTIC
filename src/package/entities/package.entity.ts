import { FeatureByPackageEntity } from "src/features-by-package/entities/features-by-package.entity";
import { ProductEntity } from "src/product/entities/product.entity";
import { QuoteDetailEntity } from "src/quote-detail/entities/quote-detail.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    
    // Relacion Muchos a Uno con la entidad products
    @ManyToOne(type => ProductEntity, product => product.packages) 
    product: ProductEntity;
    
    // Relacion Uno a Muchos con la entidad features_by_package
    @OneToMany(type => FeatureByPackageEntity, featuresByPackage => featuresByPackage.spackage)
    featuresByPackages: FeatureByPackageEntity[];

    // Relacion Uno A Muchos con la entidad quote_detail
    @OneToMany(type => QuoteDetailEntity, quoteDetail => quoteDetail.packages)
    quoteDetails: QuoteDetailEntity[];


}