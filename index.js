const ProductsData = [
  { name: 'Apple' },
  { name: 'Applesauce' },
  { name: 'Banana' },
  { name: 'Apricot' },
  { name: 'apple' },
];

const searchProduct = 'apple';

const filteredData = ProductsData.filter(
  e =>
    e.name.toLowerCase().startsWith(searchProduct.toLowerCase()) &&
    e.name.toLowerCase() !== searchProduct.toLowerCase()
);
