const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log(
  // Use forEach to console.log each product name to the console
  products.forEach(item => console.log(item.product)),

  // Use filter to filter out products that have a name longer than 5 characters
  products.filter(item => item.product.length <= 5),

  // Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices.
  // After this has been done, then use reduce to calculate the combined price of all remaining products
  products
    .filter(item => item.price !== '' && !isNaN(item.price))
    .map(item => ({ ...item, price: Number(item.price) }))
    .reduce((total, item) => total + item.price, 0),

  // Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea
  products.reduce((str, item, index) => {
    str += item.product;
    if (index !== products.length - 1) {
      str += ', ';
    }
    return str;
  }, ''),

  // Use reduce to calculate both the highest and lowest-priced items.
  // The names should be returned as the following string: Highest: coffee. Lowest: banana.
  products.reduce(
    (result, item) => {
      if (item.price !== '' && !isNaN(item.price)) {
        if (item.price > result.highest.price) {
          result.highest = item;
        }
        if (item.price < result.lowest.price) {
          result.lowest = item;
        }
      }
      return result;
    },
    { highest: { price: -Infinity }, lowest: { price: Infinity } }
  ),

  // Using only Object.entries and reduce, recreate the object with the exact same values.
  // However, the following object keys should be changed in the new array:
  // product should be changed to name
  // price should be changed to cost
  Object.entries(products).reduce((newArray, [key, value]) => {
    newArray[key] = { name: value.product, cost: value.price };
    return newArray;
  }, {})
);