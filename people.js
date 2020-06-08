const fs = require('fs');

let str = '';

fs.readFile('people.json', 'utf8', (err, data)=>{
  let res = JSON.parse(data);
  let headerRow = Object.keys(res[0]).join(',');
  str += headerRow + '\n';
  res.forEach(element => {
    let data = Object.values(element).join(',');
    str += data + '\n';
  });
  fs.unlink('./people.csv', () => {
    fs.writeFile('people.csv', str, (err) => {
      console.log(err);
    })
  })
});

