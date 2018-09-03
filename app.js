// import './moduleA'
// import './moduleB'

require.ensure(['./moduleA'],function (require) {
    let moduleA = require('./moduleA');
},'moduleA')

require.ensure(['./moduleB'],function (require) {
    let moduleB = require('./moduleB')
},'moduleB')

require.ensure(['lodash'],function () {
    let _ = require('lodash')
    let res = _.join(['hello','world'],'---')
},'lodash')

