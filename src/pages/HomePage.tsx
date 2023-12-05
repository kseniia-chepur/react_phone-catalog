import { useState, useEffect } from 'react';
import { getProducts } from '../api/getProducts';
import { Product } from '../types/Product';
import { BannerSlider } from '../components/BannerSlider/BannerSlider';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // eslint-disable-next-line
  console.log(products);

  useEffect(() => {
    getProducts()
      .then(setProducts);
  }, []);

  return (
    <>
      <BannerSlider />
    </>
  );
};
