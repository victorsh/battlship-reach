const dispatcher = (payload, dispatch) => {
  dispatch({ type: 'SET_STATE', payload: payload })
}

export default dispatcher