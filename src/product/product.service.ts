import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm'
import { IProduct } from './interfaces/product.interface';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ProductDTO } from './dtos/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>){}

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

    async createProduct(createProductDTO: CreateProductDTO): Promise<CreateProductDTO>{
        const product = await this.productRepository.save(createProductDTO);
        return product;
    }

    async updateProduct(product_id: number, createProductDTO: CreateProductDTO): Promise<any>{
        const updatedProduct = await this.productRepository.update(product_id, createProductDTO);
        return updatedProduct;
    }

    async deleteProduct(product_id: number, productDTO: ProductDTO): Promise<any>{
        productDTO.product_state = false;
        const deletedProduct = await this.productRepository.update(product_id, productDTO);
        return deletedProduct;
    }
}
