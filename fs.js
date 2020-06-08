const fs = require('fs');

fs.readFile('readme.txt','utf8', (err, data) => {
  if(err){
    throw err;
  };
  console.log(data);
  fs.writeFile('writeme.txt', data, (err,data) => {
    if (err) throw err;
    console.log(data);
  });
});

// fs.mkdir('stuff', function(){
//   fs.readFile('readme.txt', 'utf8', function(err, data){
//     fs.writeFile('stuff/writeme2.txt', data, function(error){
//       if (err) throw err;
//       console.log('The file has been saved!');
//     })
//   })
// })

console.log('test');

fs.unlink('./stuff/writeme2.txt', () => {
  fs.rmdir('stuff', ()=>{});
});

