/**
 * A method for appending events to dom.
 *
 * @export
 * @param {*} target
 * @param {*} type
 * @param {*} listener
 * @param {*} options
 */
export function on (target, type, listener, options) {
  if (target && target.addEventListener) {
    target.addEventListener(type, listener, options)
  } else {
    console.warn('[on] The addEventListener method was not found on the target.')
  }
}

/**
 * A method for removing events on the dom.
 *
 * @export
 * @param {*} target
 * @param {*} type
 * @param {*} listener
 * @param {*} options
 */
export function off (target, type, listener, options) {
  if (target && target.removeEventListener) {
    target.removeEventListener(type, listener, options)
  } else {
    console.warn('[on] The removeEventListener method was not found on the target.')
  }
}

/**
 * A method to terminate the propagation of mouse events.
 *
 * @export
 * @param {*} event
 */
export function stop (event) {
  if (event) {
    event.stopPropagation()
  }
}
