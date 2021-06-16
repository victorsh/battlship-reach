const reducer = (state = {value: 0, value2: 10}, action) => {
  console.log('redux state: ')
  console.log(state)
  switch (action.type) {
    case 'test':
      return action.payload
    default:
      return state
  }
}

export default reducer
