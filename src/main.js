import * as a from './a.js'
import * as b from './b.js'

// console.log('a=>:', a)
// console.log('b=>:', b)
// console.log("​module", module)
// if(module.hot) {
//   console.log('module hot')
//   module.hot.accept('./a.js', function () {
//     console.log('accept c.js')
//   })
//   module.hot.accept('./b.js', function () {
//     console.log('accept c.js')
//   })
// }
// import(/* webpackChunkName: 'same' */'./a.js').then( res => {
//   console.log('res: ', res)
// })
// import(/* webpackChunkName: 'same' */'./b.js')

import './other/tapable'