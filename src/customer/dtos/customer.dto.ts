import { ICustomer } from "../interfaces/customer.interface";

export class CustomerDTO implements ICustomer{
    customer_id: number;
    customer_dni: string;
    customer_name: string;
    customer_phone: string;
}