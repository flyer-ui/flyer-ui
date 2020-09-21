class Store {
  constructor () {
    this.selections = {}
    this.data = []
    this.observers = []
    this.srotField = null
  }
  addSelection (key, item) {
    this.selections[key] = item
    this.notify()
  }
  addAllSelection (prop, value) {
    if (value) {
      this.data.forEach(val => {
        this.selections[val[prop]] = value
      })
    } else {
      this.selections = {}
    }

    this.notify()
  }
  removeSelection (key) {
    delete this.selections[key]
    this.notify()
  }
  getSelectionKeys () {
    return Object.keys(this.selections)
  }
  setData (data) {
    this.data = data
  }
  getData () {
    return this.data
  }
  setSortField (fieldName, explain) {
    this.srotField = fieldName
    this.sortbyField(fieldName, explain)
  }
  sortbyField (fieldName, explain) {
    this.data.sort((prov, next) => {
      if (prov[fieldName] > next[fieldName]) {
        return explain === 'asc' ? -1 : 1
      } else if (prov[fieldName] < next[fieldName]) {
        return explain === 'asc' ? 1 : -1
      } else {
        return 0
      }
    })
  }
  addObserver (observer) {
    this.observers.push(observer)
  }
  notify () {
    this.observers.forEach(observer => {
      const args = [this.getSelectionKeys(), this.selections]
      typeof observer === 'function' && observer.apply(null, args)
    })
  }
}
export default Store
