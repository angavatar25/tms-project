const initialState = {
    personnelData: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PERSONNEL_DATA':
            return {
                personnelData: action.payload,
            }
        default:
            return state
        }
}

export default reducer