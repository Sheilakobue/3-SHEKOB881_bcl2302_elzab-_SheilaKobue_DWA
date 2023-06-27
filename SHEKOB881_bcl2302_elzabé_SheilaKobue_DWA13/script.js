const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Exercise 1: Logging each name
names.forEach(name => {
  console.log(name);
});

// Exercise 2: Logging each name with matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Exercise 3: Mapping province names to uppercase
const uppercasedProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercasedProvinces);

// Exercise 4: Creating an array with the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 5: Sorting provinces alphabetically
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Exercise 6: Filtering provinces without the word "Cape" and returning the count
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Exercise 7: Creating an object indicating the province of each individual
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);