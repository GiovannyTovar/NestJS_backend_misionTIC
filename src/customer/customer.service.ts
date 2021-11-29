import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { ICustomer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dtos/create-customer.dto';
import { CustomerDTO } from './dtos/customer.dto';
import { CreateProductDTO } from 'src/product/dtos/create-product.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(CustomerEntity) private readonly customerRepository: Repository<CustomerEntity>){}

    async getCustomerById(customerId: number): Promise<CustomerEntity>{
        const customer = await this.customerRepository.findOne(customerId);
        return customer;
    } 

    async getCustomers(): Promise<CustomerEntity[]>{
        const customers = await this.customerRepository.find({});
        return customers;
    }

    async createCustomer(CreateCustumerDTO): Promise<CreateProductDTO>{
        const customer = await this.customerRepository.save(CreateCustumerDTO);
        return customer;
    }

    async updateCustomer(customer_id: string, createCustomerDTO: CreateCustomerDTO): Promise<any>{
        const updateCustomer = await this.customerRepository.update(customer_id,createCustomerDTO);
        return updateCustomer;
    }

    async deleteCustomer(customer_id: number): Promise<CustomerEntity>{
        const findCustomer = await this.getCustomerById(customer_id);
        if(!findCustomer){
            return null;
        }
        await this.customerRepository.update(customer_id,findCustomer);
        return findCustomer;
    }


}
