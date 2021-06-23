const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      const payload = action.payload
      return {...state, ...payload};
    default:
      return state
  }
};

export default Reducer
