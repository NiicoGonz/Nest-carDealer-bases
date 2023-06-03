import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get()
    getCars() {
        return ['Audi', 'BMW', 'Mercedes'];
    }

    @Get(':id')
    getCarById(@Param('id') id:string) {
        const cars = ['Audi', 'BMW', 'Mercedes'];
        return cars[id]
  
    }
}
