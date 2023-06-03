import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Audi',
            color: 'black',
            model: 'A4',
            price: 20000
        },
        {
            id: 2,
            brand: 'BMW',
            color: 'white',
            model: 'X5',
            price: 25000
        },
        {
            id: 3,
            brand: 'Mercedes',
            color: 'red',
            model: 'C class',
            price: 30000
        }
    ]
}
