const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  // Use forEach to console.log each product name to the console
  products.forEach(product => {
    console.log(product.product);
  });
  // Use filter to filter out products that have a name longer than 5 characters
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts);
  // Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.
  const combinedPrice = products
    .filter(product => product.price !== '' && !isNaN(product.price))
    .map(product => Number(product.price))
    .reduce((total, price) => total + price, 0);
  console.log(combinedPrice);
  // Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.
  const concatenatedNames = products.reduce((result, product, index) => {
    if (index === products.length - 1) {
      return result + ' and ' + product.product;
    } else {
      return result + product.product + ', ';
    }
  }, '');
  console.log(concatenatedNames);
  // Use reduce to calculate both the highest and lowest-priced items. The names should be returned as the following string: Highest: coffee. Lowest: banana.
  const { highest, lowest } = products.reduce((result, product) => {
    if (parseFloat(product.price) > parseFloat(result.highest.price)) {
      result.highest = product;
    }
    if (parseFloat(product.price) < parseFloat(result.lowest.price)) {
      result.lowest = product;
    }
    return result;
  }, { highest: { price: '-Infinity' }, lowest: { price: 'Infinity' } });
  console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}`);
  // Using only Object.entries and reduce, recreate the object with the exact same values. However, the following object keys should be changed in the new array: product should be changed to name, price should be changed to cost.
  const transformedProducts = products.reduce((result, product) => {
    const { product: name, price: cost, ...rest } = product;
    result.push({ name, cost, ...rest });
    return result;
  }, []);
  console.log(transformedProducts);