import { Injectable } from '@nestjs/common';
import { ICategory } from 'interfaces/category';
import { mockData } from './fakeData';

@Injectable()
export class CategoriesService {
  getCategories(): ICategory[] {
    return mockData;
  }
}
