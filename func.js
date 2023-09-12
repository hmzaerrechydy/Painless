import * as fs from 'fs';

let foo =Promise.resolve(fs.readFile('data.json', (err, content) => Promise.resolve(JSON.parse(content.toString()))
))


let baz = await foo; 

console.log(baz)






function add(key, value){
    obj.data[key] = value; 
    fs.writeFileSync('data.json', JSON.stringify(obj));
}


function update(key, value){
    obj.data[key] = value;
    fs.writeFileSync('data.json', JSON.stringify(obj));
}


function remove(key){
    delete obj.data[key];
    fs.writeFileSync('data.json', JSON.stringify(obj));
}


function read(key){
    return obj.data[key] 
}

export {add, update, remove, read}




