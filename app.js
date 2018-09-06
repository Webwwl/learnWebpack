import index from './css/index.css'
import common from './css/common.css'
import './css/index.scss'

document.querySelector('.content').className += ' ' + common.danger

import(/* webpackChunkName: 'a' */ './css/a.css').then( a => {
    console.log(a)
})