module.exports = function (css) {
    console.log(css)
    if (window.innerWidth > 768) {
      return css.replace('blue','green')
    } else {
        return css.replace('blue','yellow')
    }
}