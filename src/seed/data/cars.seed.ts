import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';
export const CARSEEDS: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    color: 'Red',
    model: 'Corolla',
    price: 100000,
  },
  {
    id: uuid(),
    brand: 'Toyota',
    color: 'Blue',
    model: 'Corolla',
    price: 100000,

  },
    {
    id: uuid(),
    brand: 'Mercedes',
    color: 'Black',
    model: 'Clase A',
    price: 100000,
    },
    {
    id: uuid(),
    brand: 'Mercedes',
    color: 'White',
    model: 'Clase A',
    price: 100000,
    },
];
