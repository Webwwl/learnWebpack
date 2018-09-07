import index from './css/index.css'
import common from './css/common.css'
import './css/index.scss'


import(/* webpackChunkName: 'a' */ './css/a.css').then(a => {
    console.log(a)
})

import { chunk } from 'lodash'
import { a } from './utils/util'
console.log(a())
console.log( chunk(['a','b'],1))
