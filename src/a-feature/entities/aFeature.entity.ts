import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("additionals_features")
export class AditionalFeatureEntity{
    @PrimaryGeneratedColumn()
    feature_id: number;

    @Column()
    feature_name: string;

    @Column()
    feature_description: string;

    @Column()
    feature_price_by_unit: number;

    @Column()
    feature_state: boolean;

    // Relacion Muchos A Uno con la entidad packages
    @ManyToOne(type => PackageEntity, packages => packages.aFeatures) //package es una palabra reservada
    packages: PackageEntity;
}