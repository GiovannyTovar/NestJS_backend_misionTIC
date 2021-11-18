import { FeatureByPackageEntity } from "src/features-by-package/entities/features-by-package.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("additional_features")
export class AditionalFeatureEntity{
    @PrimaryGeneratedColumn()
    feature_id: number;

    @Column()
    feature_name: string;

    @Column()
    feature_description: string;

    @Column()
    feature_state: boolean;

    // Relacion Uno A Muchos con la entidad features_by_packages
    @OneToMany(type => FeatureByPackageEntity, featureByPackage => featureByPackage.spackage) //package es una palabra reservada
    featureByPackage: FeatureByPackageEntity[];
}