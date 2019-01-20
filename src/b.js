import c from './other/c.js'
import { clickHandle } from './a.js'  
export const b = 'b' 
 

let result = true  
let div = document.createElement('div')
div.innerHTML = 'click'
Object.assign(div.style, {
  color: '#fff',
  background: 'blue',
  fontSize: '16px'
})

let div2 = document.createElement('div')
div2.innerHTML = 'click'
Object.assign(div2.style, {
  color: '#fff',
  background: 'red',
  fontSize: '16px'
})

div.onclick = function () {
  console.log('result:', result)
}
div2.onclick = clickHandle

document.body.append(div)
document.body.append(div2)