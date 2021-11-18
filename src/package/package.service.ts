import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackageEntity } from './entities/package.entity';
import { IPackage } from './interfaces/package.interface';

@Injectable()
export class PackageService {
    constructor(@InjectRepository(PackageEntity) private readonly packageRepository: Repository<PackageEntity>){}

    async getPackageById(packageId: number): Promise<IPackage>{
        return await this.packageRepository.findOne(packageId);
    }

    async getAll(): Promise<IPackage[]>{
        return await this.packageRepository.find({
            relations: ['product'],
        });
    }

    // Metodo para traer todos los paquetes por el id de producto
    
}
