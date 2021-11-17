import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm'
import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dtos/create-product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>
        ){}

    async getProductById(productId: number): Promise<IProduct>{
        const product = await this.productRepository.findOne(productId);
        return product;
    }

    async getProducts(): Promise<ProductEntity[]>{
        const products = await this.productRepository.find({
            relations: ['packages'],
        });
        return products;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>{
        const product = await this.productRepository.save(createProductDTO);
        return product;
    }

    async updateProduct(product_id: number, createProductDTO: CreateProductDTO): Promise<IProduct>{
        const updatedProduct = await this.productRepository.update(product_id, createProductDTO);
        return null;
    }

    async deleteProduct(productId: number, createProductDTO: CreateProductDTO): Promise<any>{
        createProductDTO.product_state = false;
        const deletedProduct = await this.productRepository.update(productId, createProductDTO);
        return deletedProduct;
    }
}
