export const getProducts = async () => {
  const BASE_URL
    = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';
  const res = await fetch(BASE_URL);

  return res.json();
};
