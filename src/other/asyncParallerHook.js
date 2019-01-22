class asyncParallerHook {
  constructor() {
    this.tasks = []
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    let finalTask  = args.pop()
    let index = 0
    let done =  () => {
      console.log('done===>index: ', index)
      index++
      if (index === this.tasks.length) {
        finalTask()
      }
    }
    this.tasks.forEach( task => {
      task(...args, done)
    })
  }
}

let myHook = new asyncParallerHook(['wwl'])

myHook.tapAsync('vue', (name, cb) => {
  setTimeout(() => {
    console.log('vue name===> ', name)
    cb()
  }, 1000);
})
myHook.tapAsync('webpack', (name, cb) => {
  setTimeout(() => {
    console.log('webpack name===> ', name)
    cb()
  }, 1000);
})


myHook.callAsync(['wwl'], function () {
  console.log('end')
})
