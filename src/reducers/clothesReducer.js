import { v4 as uuid } from 'uuid';

const initialState = { 
    clothes: [],
    loading: false,
    match: false
}

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_CLOTHES':
            return {
                ...state,
                clothes: [...state.clothes],
                loading: true,
                match: false
            }

        case 'LOAD_CLOTHES':
            const tops = action.payload.tops.map(top => {
                return {
                    ...top,
                    uuid: uuid(), 
                    imageURL: top.imageURL,
                    categories: top.categories,
                    seasons: top.seasons
                }
            })
            const bottoms = action.payload.bottoms.map(bottom => {
                return {
                    ...bottom,
                    uuid: uuid(), 
                    imageURL: bottom.imageURL,
                    categories: bottom.categories,
                    seasons: bottom.seasons
                }
            })

            return {
                ...state,
                clothes: {
                    tops: {
                        category: "tops",
                        pieces: tops,
                        selectedPiece: 0
                    }, 
                    bottoms: {
                        category: "bottoms",
                        pieces: bottoms,
                        selectedPiece: 0
                    }
                },
                loading: false,
                match: false
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
                loading: false,
                match: false
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
                loading: false,
                match: false
            }

        case 'SHOW_MODAL':
            return {
                ...state,
                showModal: true
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                showModal: false
            }
        case 'DRESS_ME':
            console.log("dress me")
            return state

        default:
            return state
    }
}

export default clothesReducer

// state structure (for reference)
// let state = {
//     clothes: [
//         {
//             category: "tops",
//             pieces: [{
//                 uuid: "",
//                 imageURL: "",
//                 categories: "",
//                 seasons: ""
//             }],
//             selectedPiece: 0
//         },
//         {
//             category: "bottoms",
//             pieces: [{
//                 uuid: "",
//                 imageURL: "",
//                 categories: "",
//                 seasons: ""
//             }],
//             selectedPiece: 0
//         }
//     ], 
//     loading: false,
//     match: false,
//     showModal: false
// }