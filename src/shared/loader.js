
import {noop} from './util'

// 可动态加载JS/CSS的加载器
export function loader (paths, callback) {
  if (typeof paths === 'string') {
    paths = [paths]
  }

  if (!Array.isArray(paths)) {
    console.warn('The type of passed argument must be an Array or String.')
    return false
  }

  const cache = {}
  const head = document.querySelector('head')

  let index = 0
  callback = typeof callback === 'function' ? callback : noop

  paths.forEach(path => {
    if (cache[path]) {
      return false
    }
    if (path.substr(-3) === '.js') {
      loadJS(path)
    } else if (path.substr(-4) === '.css') {
      loadCSS(path)
    }
  })

  function loadJS (path) {
    const script = document.createElement('script')
    script.src = path
    script.type = 'text/javascript'
    head.appendChild(script)
    script.onload = script.onreadystatechange = function () {
      script.onload = script.onreadystatechange = null
      loaded()
    }
    cache[path] = true
  }
  function loadCSS (path) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = path
    head.appendChild(link)
    link.onload = link.onreadystatechange = function () {
      link.onload = link.onreadystatechange = null
      loaded()
    }
    cache[path] = true
  }
  function loaded () {
    index++
    if (index === paths.length) {
      callback.apply(null)
    }
  }
}
