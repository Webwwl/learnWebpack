class SyncBailHook {
  constructor() {
    this.tasks = []
  }
  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let [firstTask, ...restTask] = this.tasks
    let ret = firstTask(...args)
    restTask.reduce( (a, b) => {
      return b(a)
    }, ret)
  }
}

let myHook = new SyncBailHook(['wwl'])

myHook.tap('vue', (name) => {
  console.log('vue name===> ', name)
  return 'vue is good'
})
myHook.tap('webpack', (data) => {
  console.log('webpack name===> ', data)
  return 'webpack is ok'
})
myHook.tap('angular', (data) => {
  console.log('angular name===> ', data)
  return 'let learn angular'
})

myHook.call('wwl')
