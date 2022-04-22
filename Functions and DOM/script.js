/***********************************************
 * Functions
 */

// Function declaration
function calculateAge(birthYear) {
  return 2022 - birthYear;
}

const ageJohn = calculateAge(1990);
const ageMark = calculateAge(1948);
console.log(ageJohn, ageMark);

// Funtion expression
const yearsUntilRetirement = (yearOfBirth, firstName) => {
  const age = calculateAge(yearOfBirth);
  const retirement = 60 - age;

  //   console.log(`${firstName} retires in ${retirement} year(s)`);

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year(s).`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mark");
yearsUntilRetirement(1969, "Jane");
