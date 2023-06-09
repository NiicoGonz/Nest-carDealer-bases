import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { v4 as uuid } from 'uuid';
import { CARSEEDS } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
  ) {}
  

  populateDB() {
    const cars = this.carsService.fillCarsWhitSeedData(CARSEEDS);
    console.log(this.carsService.fillCarsWhitSeedData(CARSEEDS), 'cars xen seed service');
    console.log(cars, 'cars en seed service');
    return 'Seed executed successfully';
}


}
