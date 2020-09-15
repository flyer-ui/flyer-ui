export const selections = {}
export const addSelection = function (key, item) {
  selections[key] = item
}
export const removeSelection = function (key) {
  delete selections[key]
}
export const getSelectionKeys = function () {
  return Object.keys(selections)
}
