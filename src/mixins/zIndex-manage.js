export default (function () {
  let zId = 1000
  return {
    get () {
      return zId++
    }
  }
})()
