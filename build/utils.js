const path = require('path')
module.exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
