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
            let topsData = action.payload.find(obj => obj.category === "tops") 
            let bottomsData = action.payload.find(obj => obj.category === "bottoms")
            
            const tops = topsData.pieces.map(top => {
                return {
                    ...top,
                    uuid: uuid(), 
                    imageURL: top.imageURL,
                    categories: top.categories,
                    seasons: top.seasons
                }
            })
            const bottoms = bottomsData.pieces.map(bottom => {
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

        case 'DETERMINE_MATCH':
            let isMatch

            // we're just gonna hardcode this so that the yellow plaid fit is the only matching one
            if (action.selected.top.imageURL === "https://i.imgur.com/LH4eU3x.jpg" && action.selected.bottom.imageURL === "https://i.imgur.com/5RGZE6c.jpg") {
                isMatch = true
            } else {
                isMatch = false
            }

            return {
                ...state,
                match: isMatch
            }

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
//     loading: false
// }