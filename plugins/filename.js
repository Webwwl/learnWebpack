function FileNamesPlugin() {
  
}

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
}

module.exports = FileNamesPlugin