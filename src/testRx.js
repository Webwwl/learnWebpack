import { fromEvent, from, interval, of, error, Observable, Subject} from 'rxjs'
import { map, throttleTime, multicast, take, scan, debounceTime, mapTo } from 'rxjs/operators'

// let source$ = from([1,2,3])
// let subject = new Subject()

// let multicastSource = source$.pipe(multicast(subject))

// multicastSource.subscribe( val => console.log('val1 got: ', val))
function getEl(selector) {
    return document.querySelector(selector)
}
let btn = getEl('.btn')

let ob = fromEvent(btn, 'click').pipe(debounceTime(500))
let ob2 = fromEvent(btn, 'click').pipe(throttleTime(500))
let ob3 = fromEvent(btn, 'click').pipe(take(1))

// ob.subscribe( {
//     next: (val) => {
//         console.log('click debounce')
//     }
// })
// ob2.subscribe( {
//     next: (val) => {
//         console.log('click throttle')
//     }
// })
ob3.subscribe({
    next: (val) => {
        console.log('take 1 click')
    }
})

window.alert(`client width: ${document.documentElement.clientWidth}, innerWidth width: ${window.innerWidth}`)
// let ob4 = fromEvent(window, 'resize').pipe(throttleTime(500)).pipe(mapTo(document.documentElement.clientWidth)).subscribe({
//     next: (val) => { 
//         console.log('client width: ', val)
//         console.log('visual width: ', window.innerWidth)
//     }
// })

// window.addEventListener('resize', function () {
//     let width = document.documentElement.clientWidth
//     console.log('client width: ',width)
// }, false)
