/* eslint-disable no-console */
/* eslint-disable strict */
const heroes = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(array, q) {
  let qItems = Object.keys(q);
  if(qItems.length===3) {
    return array.find(hero => 
      hero.id===q.id && hero.name===q.name && hero.squad===q.squad) || 
      null;
  } 
  else if (qItems.length===2) {
    return array.find(hero =>
      hero.id===q.id && hero.name===q.name ||
      hero.id===q.id && hero.squad===q.squad ||
      hero.name===q.name && hero.squad===q.squad) || 
      null;
  }
  else if (qItems.length===1) {
    return array.find(hero =>
      hero.id===q.id ||
      hero.name===q.name ||
      hero.squad===q.squad) || 
      null;
  }
  else {
    return null;
  }
}

console.log(findOne(heroes, { id: 1 }));
// { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(heroes, { id: 10 }));
// null

console.log(findOne(heroes, { id: 2, name: 'Aquaman' }));
// null

console.log(findOne(heroes, { id: 5, squad: 'Justice League' }));
// { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(heroes, { squad: 'Justice League' }));
// { id: 4, name: 'Superman', squad: 'Justice League' }