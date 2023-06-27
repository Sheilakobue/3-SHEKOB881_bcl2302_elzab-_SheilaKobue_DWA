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

//Logging each name
names.forEach(name => { //'forEach method is on the 'names' array to iterate(over and over) over each element
  console.log(name);
});

//Logging each name with matching province
names.forEach((name, index) => {//'forEach' method is used to also  provide an index parameter
  console.log(`${name} (${provinces[index]})`);//the name and the corresponding province are logged to the console in the format ${name} (${province}).
});

//Mapping province names to uppercase
/**
 * An array of uppercase province names.
 * @type {string[]}
 */
const uppercasedProvinces = provinces.map(province => province.toUpperCase());// map method is used on the province array to create a new array

//Creating an array with the length of each name
/**
 * An array of name lengths.
 * @type {number[]}
 */
const nameLengths = names.map(name => name.length);


//Sorting provinces alphabetically
/**
 * An array of sorted provinces.
 * @type {string[]}
 */
const sortedProvinces = provinces.sort();

//Filtering provinces without the word "Cape" and returning the count
/**
 * An array of filtered provinces.
 * @type {string[]}
 */
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

/**
 * A boolean array indicating whether each name contains an 'S' character.
 * @type {boolean[]}
 */
const hasSCharacter = names.map(name => name.includes('S'));


//Creating an object indicating the province of each individual
/**
 * An object indicating the province of each individual.
 * @type {Object.<string, string>}
 */
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});

console.log(uppercasedProvinces, nameLengths,sortedProvinces, hasSCharacter, provinceObject);

