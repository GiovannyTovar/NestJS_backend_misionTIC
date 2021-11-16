import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dtos/create-product.dto';

@Controller('product')
export class ProductController {

    @Get()
    getStudents(){
        return "ok";
    }

    @Get(':product_id')
    getStudent(@Param('product_id') product_id: string){
        console.log(product_id)
        return {
            message: 'Estudiante encontrado'
        }
    }

    @Post()
    createStudent(@Body() productDTO: CreateProductDTO){
        return productDTO;
    }

    @Put(':product_id')
    updateStudent(@Param('product_id') product_id: string){

    }

    @Delete(':product_id')
    deleteStudent(@Param('product_id') product_id: string){

    }
}
