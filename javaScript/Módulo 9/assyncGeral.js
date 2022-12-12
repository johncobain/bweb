// callback > promise > async/await

const fs = require('fs');

console.log(1);
/* callback
fs.readFile('./in1.txt', (err, content) =>{
    fs.readFile('./in2.txt', (err2, content2)=>{
        console.log(err, String(content));
        console.log(err2, String(content2));
    })
});
*/
// promisse
const readFile = file => new Promise((resolve, reject)=>{
    fs.readFile(file,(err,content)=>{
        if(err){
            reject(err)
        }else{
            resolve(content);
        }
    })
});
/* Promisse
const promessa = readFile('./in1.txt')
    .then(content =>{
        console.log(String(content));
        return readFile('./in2.txt')
    })
    .then(content =>{
        console.log(String(content));
    })

setTimeout(() => {
        console.log(promessa);
}, 1000);
*/

//async/await açucar sintático em cima da promisse

const init = async() =>{
    try{
        const content = await readFile('./in1.txt');
        const content2 = await readFile('./in2.txt');
        return String(content) +'\n'+ String(content2);
    }catch(err){
        console.log(err);
    }
}

init()
    .then(content => console.log(content))

console.log(2);

console.log(3);