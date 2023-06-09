import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';
export const brands_Seed: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createAt: new Date().getTime(),
  
  },
  {
    id: uuid(),
    name: 'Toyota',
    createAt: new Date().getTime(),


  },
    {
    id: uuid(),
    name: 'Mercedes',
    createAt: new Date().getTime(),

    },
    {
    id: uuid(),
    name: 'Mercedes',
    createAt: new Date().getTime(),
  
    },
];
