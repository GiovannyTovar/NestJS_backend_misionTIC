import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get()
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            data: products
        });
    }

    @Get(':product_id')
    async getProduct(@Res() res, @Param('product_id') product_id: number){
        const product = await this.productService.getProductById(product_id);
        return res.status(HttpStatus.OK).json({
            data: product
        });
    }

    @Post()
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.CREATED).json({
            message: 'recived',
            data: product
        });
    }

    @Put(':product_id')
    updateProduct(@Param('product_id') product_id: string){

    }

    @Delete(':product_id')
    deleteProduct(@Param('product_id') product_id: string){

    }
}
