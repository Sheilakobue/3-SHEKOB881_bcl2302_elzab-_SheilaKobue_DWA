/**
 * An array of province names.
 * @type {string[]}
 */
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

/**
 * An array of names.
 * @type {string[]}
 */
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

console.log(
  // Logging each name
  names.forEach(name => {
    console.log(name);
  }),

  // Logging each name with matching province
  names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
  }),

  // Mapping province names to uppercase
  provinces.map(province => province.toUpperCase()),

  // Creating an array with the length of each name
  names.map(name => name.length),

  // Sorting provinces alphabetically
  provinces.sort(),

  // Filtering provinces without the word "Cape" and returning the count
  provinces.filter(province => !province.includes('Cape')).length,

  // Creating a boolean array indicating whether each name contains an 'S' character
  names.map(name => name.includes('S')),

  // Creating an object indicating the province of each individual
  names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {})
);