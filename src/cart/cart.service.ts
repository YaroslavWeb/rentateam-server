import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/CreateCartDto';

@Injectable()
export class CartService {
  createCart(data: CreateCartDto): { message: string } {
    console.log(JSON.stringify(data));
    return { message: 'Корзина сформирована!' };
  }
}
