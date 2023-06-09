import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BrandsService {
  private brands: Brand[] = [
  
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return 'This action adds a new brand';
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand: Brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand whit id '${id}' not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    if(!brandDb) throw new NotFoundException(`Brand whit id '${id}' not found`);
    this.brands = this.brands.map((brand: Brand) => {
      if (brand.id === id) {
        brand.updateAt = new Date().getTime();
        brandDb = { ...brand, ...updateBrandDto };
        return brandDb;
      }
      return brand;
    });
    return brandDb;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand: Brand) => brand.id !== id);

    return ;
  }

  fillbrandsWhitSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
