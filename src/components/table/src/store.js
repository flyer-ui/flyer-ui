import {Broadcaster} from '@flyer-ui/commonality'
class Store {
  constructor () {
    this.selections = {}
    this.filtered = {}
    this.data = []
    this.broadcaster = new Broadcaster()
    this.srotField = null
  }
  addSelection (key, item) {
    this.selections[key] = item
    this.publish('selection')
  }
  addAllSelection (prop, value) {
    if (value) {
      this.data.forEach(val => {
        this.selections[val[prop]] = value
      })
    } else {
      this.selections = {}
    }
    this.publish('selection')
  }
  removeSelection (key) {
    delete this.selections[key]
    this.publish('selection')
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
    this.publish('sort')
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
  setFilterd (key, filtered) {
    this.filtered[key] = filtered
    this.publish('filter')
  }
  subscribe (channel, event) {
    this.broadcaster.subscribe(channel, event)
  }
  publish (channel) {
    let args = []
    switch (channel) {
      case 'selection': {
        args = [this.getSelectionKeys(), this.selections]
        break
      }
      case 'sort': {
        args = []
        break
      }
      case 'filter': {
        args = [this.filtered]
        break
      }
    }
    this.broadcaster.publish(channel, ...args)
  }
}
export default Store
