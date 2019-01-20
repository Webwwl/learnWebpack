import * as tapable from 'tapable'

let { SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook } = tapable

let sync1 = new SyncBailHook()

sync1.tap('say', () => {
  console.log('say')
  return true
})

sync1.tap('say2', () => {
  console.log('say2')
})

sync1.tap('say3', () => {
  console.log('say3')
})

sync1.call()