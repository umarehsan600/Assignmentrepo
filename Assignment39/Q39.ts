//Name	Muhammad Umar Ehsan
//Roll No	PIAIC218449
//Batch	Batch 47


// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const location1 = city_country("Lahore", "Pakistan");
const location2 = city_country("Tokyo", "Japan");
const location3 = city_country("Paris", "France");

// Printing the returned values
console.log(location1);
console.log(location2);
console.log(location3);