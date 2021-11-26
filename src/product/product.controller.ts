import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).send(products);
    }

    @Get(':product_id')
    async getProduct(@Res() res, @Param('product_id') product_id: number) {
        const product = await this.productService.getProductById(product_id);
        return res.status(HttpStatus.OK).send(product);
    }

    @Post()
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.CREATED).send(product);
    }

    @Put(':product_id')
    async updateProduct(@Param('product_id') product_id: string, @Res() res, @Body() createProductDTO: CreateProductDTO) {
        const updatedProduct = await this.productService.updateProduct(product_id, createProductDTO);
        return res.status(HttpStatus.OK).send(updatedProduct);
    }

    @Delete(':product_id')
    async deleteProduct(@Param('product_id') product_id: number, @Res() res) {
        const deletedProduct = await this.productService.deleteProduct(product_id);
        if(!deletedProduct){
           throw new NotFoundException('Product not found');
        }
        return res.status(HttpStatus.OK).send(deletedProduct);
    }
}
