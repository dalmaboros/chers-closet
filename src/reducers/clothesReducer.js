const clothesReducer = (
    state = { clothes: [], activeTop: {}, activeBottom: {}, loading: false }, action
    ) => {
    switch (action.type) {
        case 'LOADING_CLOTHES':
            return {
                ...state,
                clothes: [...state.clothes], 
                activePiece: {},
                loading: true
            }
        case 'SELECT_NEXT_PIECE':
            return {
                // 
            }
        case 'SELECT_PREVIOUS_PIECE':
            return {
                // 
            }
        default:
            return state
    }
}

export default clothesReducer