const setname = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'setnames',
            payload: data
        })
    }

}

const setage = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'setage',
            payload: data
        })
    }

}

export {
    setname,
  setage,
}