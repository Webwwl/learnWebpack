function FileNamesPlugin() {
  
}
let date
FileNamesPlugin.prototype.apply = function (compiler) {
  compiler.hooks.emit.tap('FileNamesPlugin', function (compilation) {
    let fileNames = 'filenames: \n\n'
    for (let fileName in compilation.assets) {
      fileNames += 'filename:' + fileName + '\n'
    }
    
    compilation.assets['filenames.md'] = {
      source: function () {
        return fileNames
      },
      size: function () {
        return fileNames.length
      }
    }
  })
  compiler.hooks.beforeRun.tap('FileNamesPlugin', function (compilation) {
    console.log("filenamesPlugin called at beforeRun hooks")
    date = new Date().getTime()
    console.log('====> start time:', date)
  })
  compiler.hooks.done.tap('FileNamesPlugin', function (compilation) {
    console.log("filenamesPlugin called at beforeRun hooks")
    let oldDate = date
    date = new Date().getTime()
    console.log('====> end time:', date)
    console.log('====> cost time:', date - oldDate)
  })
}

module.exports = FileNamesPlugin