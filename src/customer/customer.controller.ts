import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateCustomerDTO } from './dtos/create-customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {

    constructor(private readonly customerService: CustomerService){ }

    @Get()
    async getCustomers(@Res() res) {
        const customers = await this.customerService.getCustomers();
        return res.status(HttpStatus.OK).send(customers);
    }

    @Get(':customer_id')
    async getCustomer(@Res() res, @Param('customer_id') customer_id: number){
        const customer = await this.customerService.getCustomerById(customer_id);
        return res.status(HttpStatus.OK).send(customer);
    }

    @Post()
    async createCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO){
        const customer = await this.customerService.createCustomer(createCustomerDTO);
        return res.status(HttpStatus.CREATED).send(customer);
    }

    @Put(':customer_id')
    async updateCustomer(@Param('customer_id') customer_id: string, @Res() res, @Body() CreateCustomerDTO: CreateCustomerDTO){
        const updatedCustomer = await this.customerService.updateCustomer(customer_id, CreateCustomerDTO);
        return res.status(HttpStatus.OK).send(updatedCustomer);
    }

    @Delete(':customer_id')
    async deleteCustomer(@Param('cutomer_id') customer_id: number, @Res() res){
        const deletedCustomer = await this.customerService.deleteCustomer(customer_id);
        if(!deletedCustomer){
            throw new NotFoundException('Customer not found');
        }
        return res.status(HttpStatus.OK).send(deletedCustomer)

    }
}
