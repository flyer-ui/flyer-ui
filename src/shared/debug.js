export const warn = function (name, msg) {
  if (window && window.console) {
    if (arguments.length === 1) {
      msg = name
      console.warn(`[Flyer-UI]`, msg)
    } else {
      console.warn(`[Flyer-UI.${name}]`, msg)
    }
  }
}

export const error = function (name, msg) {
  if (window && window.console) {
    if (arguments.length === 1) {
      msg = name
      console.error(`[Flyer-UI]`, msg)
    } else {
      console.error(`[Flyer-UI.${name}]`, msg)
    }
  }
}

export const tip = function (name, msg) {
  if (window && window.console) {
    if (arguments.length === 1) {
      msg = name
      console.log(`[Flyer-UI]`, msg)
    } else {
      console.log(`[Flyer-UI.${name}]`, msg)
    }
  }
}
