
import { Injectable, NotFoundException, Scope } from '@nestjs/common';
import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './interfaces/dto/create-car.dto';
import { UpdateCarDto } from './interfaces/dto/update-car.dto';
@Injectable({ scope: Scope.REQUEST })
export class CarsService {
  private cars: Car[] = [
    // {
    //     id: uuid(),
    //     brand: 'Toyota',
    //     model: 'Corolla' 
    // },
];


findAll() {
    return this.cars;
}
  getCarById(id: string): Car {
    const car = this.cars.find((car: Car) => car.id === id);
    if (!car) throw new NotFoundException(`Car whit id '${id}' not found`);
    return car;
  }
  
  createCar(createCarDto: CreateCarDto): Car {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

 deleteCar(id: string) : void {
  const index = this.cars.findIndex((car: Car) => car.id === id);
  if (index === -1)
    throw new NotFoundException(`Car whit id '${id}' not found`);
  this.cars.splice(index, 1);

}
  updateCar(id: string, updateCarDto: UpdateCarDto): Car {
    let carDB: Car = this.getCarById(id);

    this.cars = this.cars.map((car: Car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  fillCarsWhitSeedData(cars: Car[]) {
    this.cars = cars;
    console.log(this.cars, 'cars en cars service')
    return this.cars;
  }
}
