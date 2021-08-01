export const appState = (state) => {
  return (dispatch) => {
    dispatch({
      type: 'main',
      payload: state
    })
  }
} 
