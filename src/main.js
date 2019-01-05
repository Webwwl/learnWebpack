// import $ from 'jquery'
// import { join }  from 'lodash'

//require.include('./moduleA.js')
// import a from './a'
// import b from './b'
// let arr = join([1,2,3])
// import $ from 'jquery'
import { c } from './utils'
console.log('c res: ',c())

// import 'jquery'
import * as _ from 'lodash'
let flag = 'a'
console.log(_.join)


// import './a.js'
// import './b.js'

import(/* webpackChunkName: 'common-app1' */'./a.js')
import(/* webpackChunkName: 'common-app2' */'./b.js')
// import(/* webpackChunkName: 'vendor' */'jquery').then( $ => {
//     console.log(typeof $)
// })

// if (flag === 'a') {
//     import(/* webpackChunkName: 'a' */'./a.js').then(a => {
//         console.log(a)
//     })
// } else {
//     import(/* webpackChunkName: 'b' */'./b.js').then(b => {
//         console.log(b)
//     })
// }
// if (flag === 'a') {
//     require.ensure([], (require) => {
//         console.log(require('./a.js'))
//     }, 'a')
// } else {
//     require.ensure([], (require) => {
//         console.log(require('./b.js'))
//     }, 'b')
// }
