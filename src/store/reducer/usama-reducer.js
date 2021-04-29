const INITIAL_STATE = {
    myname: 'uhk',
    myage: '10'
}


export default (state = INITIAL_STATE, action) => {
    console.log('usama-reducer=> ', action)

    switch (action.type) {
        case ('setnames'):
            return ({
                ...state, myname: action.payload
            })
            case ('setage'):
            return ({
                ...state, myage: action.payload
            })
    }

    return state
}
