import { AditionalFeatureEntity } from "src/a-feature/entities/aFeature.entity";
import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('features_by_package')
export class FeatureByPackageEntity{
    @PrimaryGeneratedColumn()
    feature_by_package_id: number;

    @Column()
    feature_price_by_unit: number;

    // Relacion Muchos A Uno con la entidad packages
    @ManyToOne(type => PackageEntity, spackage => spackage.featuresByPackages) //package es una palabra reservada
    spackage: PackageEntity;

    // Relacion Muchos A Uno con la entidad additional_features
    @ManyToOne(type => AditionalFeatureEntity, aFeature => aFeature.featureByPackage)
    aFeature: AditionalFeatureEntity;

}