import { Category } from './Category';

export interface Product {
  id: string,
  type: Category,
  price: number,
  discount: number,
  age: number,
}
