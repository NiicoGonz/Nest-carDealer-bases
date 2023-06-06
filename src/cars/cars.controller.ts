import { Controller, Get, Param, Body, Post, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}
    @Get()
    async getCars(): Promise<Car[]> {
        return this.carsService.getCars();
    }
    @Get(':id')
    getCarById(@Param('id',ParseIntPipe) id:number) {
        return this.carsService.getCarById(id);
    }
    
    @Post()
    async createCar(@Body() car: Car): Promise<any> {
        return this.carsService.createCar(car);
    }

    @Delete(':id')
    async deleteCar(@Param('id',ParseIntPipe) id:number): Promise<any> {
        return this.carsService.deleteCar(id);
    }

    @Patch(':id')
    async updateCar(@Param('id',ParseIntPipe) id:number, @Body() car: Car): Promise<any> {
        return this.carsService.updateCar(id, car);
    }


}
