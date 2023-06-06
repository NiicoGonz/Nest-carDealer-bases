import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: 1,
            brand: 'Audi',
            color: 'red',
            model: 'A3',
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
            color: 'black',
            model: 'CLA',
            price: 30000,
        }
    ];
    getCars(): Car[] {
        return this.cars;
    }
    getCarById(id: number): Car {
        const car = this.cars.find(car => car.id === id);
        if(!car) throw  new NotFoundException(`Car whit id '${id}' not found`);
        return car
    }
    createCar(car: Car) {
        this.cars.push(car);
    }
    
    deleteCar(id: number) {
        const index = this.cars.findIndex(car => car.id === id);
        if(index === -1) throw new NotFoundException(`Car whit id '${id}' not found`);
        this.cars.splice(index, 1);
    }
    updateCar(id: number, car: Car) {
        const index = this.cars.findIndex(car => car.id === id);
        if(index === -1) throw new NotFoundException(`Car whit id '${id}' not found`);
        this.cars[index] = car;
    }

}
