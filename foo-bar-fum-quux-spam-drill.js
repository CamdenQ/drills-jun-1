/* eslint-disable no-console */
/* eslint-disable strict */
const myObj = {foo: 1, bar: 2, fum: 3, quux: 4, spam: 5};

for (let property in myObj) {
  console.log(`${property}: ${myObj[property]}`);
}