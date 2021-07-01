import { IsNotEmpty } from 'class-validator';
import { IProduct } from 'interfaces/product';

interface ICartProducts {
  count: number;
  product: IProduct;
}

export class CreateCartDto {
  @IsNotEmpty()
  products: ICartProducts[];
  totalCount: number;
  totalPrice: number;
}
