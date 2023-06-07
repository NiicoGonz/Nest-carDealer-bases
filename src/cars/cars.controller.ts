import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
  ParseUUIDPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { Car } from 'src/cars/interfaces/car.interface';
import { CarsService } from './cars.service';
import { CreateCarDto } from './interfaces/dto/create-car.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  async getCars(): Promise<Car[]> {
    return this.carsService.getCars();
  }
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getCarById(id);
  }

  @Post()
  async createCar(@Body() createCarDto: CreateCarDto): Promise<any> {
    return createCarDto
  }

  @Delete(':id')
  async deleteCar(@Param('id', ParseUUIDPipe) id: string): Promise<any> {
    return this.carsService.deleteCar(id);
  }

  @Patch(':id')
  async updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() car: Car,
  ): Promise<any> {
    return this.carsService.updateCar(id, car);
  }
}
