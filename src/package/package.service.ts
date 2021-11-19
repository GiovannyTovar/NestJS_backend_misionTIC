import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackageEntity } from './entities/package.entity';
import { IPackage } from './interfaces/package.interface';

@Injectable()
export class PackageService {
    constructor(@InjectRepository(PackageEntity) private readonly packageRepository: Repository<PackageEntity>,
    /**private readonly productService: ProductService*/){}

    async getPackageById(packageId: number): Promise<PackageEntity>{
        return await this.packageRepository.findOne(packageId);
    }

    async getAll(): Promise<IPackage[]>{
        return await this.packageRepository.find({
            relations: ['product'],
        });
    }

    // Metodo para traer todos los paquetes por el id de producto
    async getPackagesByProductId(product_id): Promise<PackageEntity[]>{
        return await this.packageRepository.find({
            where: { "product": product_id}
        })
    }

    /**
    async createPackage(createPackageDto: CreatePackageDTO): Promise<PackageEntity>{
        const findProduct = await this.productService.getProductById(createPackageDto.product_id);
        let packages = new PackageDTO();
        packages.package_status = true;
        packages.package_name = createPackageDto.package_name;
        packages.package_description = createPackageDto.package_description;
        packages.package_x_units = createPackageDto.package_x_units;
        packages.package_base_price = createPackageDto.package_base_price;
        packages.product = findProduct;
        return await this.packageRepository.save(packages); 
    }
    */
}
