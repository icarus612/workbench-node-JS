let fs = require('fs')
let process = require('process')
fs.readFile('./shopify-files-list.txt', 'utf8', function(err, data){
    if (err) throw err;
    processFile(data)
});
const processFile = (e) =>{
    let x = e.split(",").join("\n");
    let j = fs.writeFile('shopify-correct.txt', x, (err)=>{
        if (err) throw err;
    })
}
