const reducer = (state = { clothes: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CLOTHES':
            return {
                ...state,
                clothes: [...state.clothes], 
                loading: true
            }
        default:
            return state
    }
}

export default reducer