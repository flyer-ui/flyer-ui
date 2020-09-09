function Sort () {
  let current = null
  return {
    setCurrentField (value) {
      current = value
    },
    getCurrentField () {
      return current
    }
  }
}

export const sort = Sort()
