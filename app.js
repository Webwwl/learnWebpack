let fn = () => { }
const NUM = 44
let arr = [1, 2, 3].map( item => item * 2)
console.log('set(arr): ' + new Set(arr))

function* iterator(){
    yield 1;
    yield 2; 
    yield 3;
}

let it = iterator()

for(let i of it){
    console.log(i)
}