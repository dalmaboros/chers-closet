const initialState = { 
    clothes: [],
    loading: false,
    modalVisible: false
}

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_CLOTHES':
            return {
                ...state,
                clothes: [...state.clothes],
                loading: true
            }
        case 'LOAD_CLOTHES':
            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    tops: {
                        category: "tops", 
                        pieces: action.payload.tops,
                        selectedPiece: 0
                    },
                    bottoms: {
                        category: "bottoms", 
                        pieces: action.payload.bottoms,
                        selectedPiece: 0
                    }
                }, 
                loading: false
            }

        case 'SELECT_NEXT_PIECE':
            let nextIndex = state.clothes[action.category].selectedPiece

            if (nextIndex === state.clothes[action.category].pieces.length - 1) {
                nextIndex = 0
            } else {
                nextIndex = state.clothes[action.category].selectedPiece + 1
            }

            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    [action.category]: {
                        ...state.clothes[action.category],
                        selectedPiece: nextIndex
                    },
                }, 
                loading: false
            }

        case 'SELECT_PREVIOUS_PIECE':
            let previousIndex = state.clothes[action.category].selectedPiece

            if (previousIndex === 0) {
                previousIndex = state.clothes[action.category].pieces.length - 1
            } else {
                previousIndex = state.clothes[action.category].selectedPiece - 1
            }

            return {
                ...state,
                clothes: {
                    ...state.clothes,
                    [action.category]: {
                        ...state.clothes[action.category],
                        selectedPiece: previousIndex
                    },
                }, 
                loading: false
            }

        case 'SHOW_MODAL':
            return {
                ...state,
                modalVisible: true
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                modalVisible: false
            }

        default:
            return state
    }
}

export default clothesReducer