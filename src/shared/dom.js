
import {warn} from './debug'

export function on (target, type, listener, options) {
  if (target && target.addEventListener) {
    target.addEventListener(type, listener, options)
  } else {
    warn('on', 'The addEventListener method was not found on the target.')
  }
}

export function off (target, type, listener, options) {
  if (target && target.removeEventListener) {
    target.removeEventListener(type, listener, options)
  } else {
    warn('on', 'The removeEventListener method was not found on the target.')
  }
}

export function stop (event) {
  if (event) {
    event.stopPropagation()
  }
}
