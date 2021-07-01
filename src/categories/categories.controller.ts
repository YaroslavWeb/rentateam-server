import { Controller, Get } from '@nestjs/common';
import { ICategory } from 'interfaces/category';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(): ICategory[] {
    return this.categoriesService.getCategories();
  }
}
