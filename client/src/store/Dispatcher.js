const Dispatcher = (dispatch, payload, reset) => {
  typeof reset === 'undefined' ? dispatch({ type: 'SET_STATE', payload: payload }) : dispatch({ type: 'SET_STATE', payload: ResetState })
}

export default Dispatcher
