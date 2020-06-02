/* eslint-disable no-console */
/* eslint-disable strict */
let employee1 = {
  name: 'John',
  jobTitle: 'Janitor',
  boss: 'Owen'
};

let employee2 = {
  name: 'SArray',
  jobTitle: 'Secretary',
  boss: 'Owen'
};

let employee3 = {
  name: 'Tyrone',
  jobTitle: 'Technical Coach',
  boss: 'Owen'
};

let employee4 = {
  name: 'Owen',
  jobTitle: 'Owner'
};

let employees = [employee1, employee2, employee3, employee4];

for (let i=0; i<employees.length; i++) {
  if ('boss' in employees[i]) {
    console.log(`${employees[i].jobTitle} ${employees[i].name} reports to ${employees[i].boss}`);
  } else {
    console.log(`${employees[i].jobTitle} ${employees[i].name} doesn't report to anybody.`);
  }
}