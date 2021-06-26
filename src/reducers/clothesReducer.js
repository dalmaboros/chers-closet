import { v4 as uuid } from 'uuid';

const clothesReducer = (
    state = { 
        clothes: {tops: [], bottoms: []}, 
        selectedClothes: {top: {}, bottom: {}}, 
        loading: false 
    }, action) => {

    switch (action.type) {
        case 'LOADING_CLOTHES':
            return {
                ...state,
                clothes: {...state.clothes},
                selectedClothes: {...state.selectedClothes},
                loading: true
            }

        case 'LOAD_CLOTHES':
            const tops = action.clothes.tops.map(top => {
                return {
                    ...top,
                    imageURL: top.imageURL,
                    categories: top.categories,
                    seasons: top.seasons,
                    uuid: uuid()
                }
            })
            const bottoms = action.clothes.bottoms.map(bottom => {
                return {
                    ...bottom,
                    imageURL: bottom.imageURL,
                    categories: bottom.categories,
                    seasons: bottom.seasons,
                    uuid: uuid()
                }
            })

            return {
                ...state,
                clothes: {
                    tops: state.clothes.tops.concat(tops),
                    bottoms: state.clothes.bottoms.concat(bottoms)
                }, 
                selectedClothes: { 
                    top: tops[0],
                    bottom: bottoms[0]
                },
                loading: false
            }

        default:
            return state
    }
}

export default clothesReducer

// state structure (for reference)
// let state = {
//     clothes: [{
//         tops: [{
//             uuid: "",
//             imageURL: "",
//             categories: "",
//             seasons: ""
//             }
//         ],
//         bottoms: [{
//             uuid: "",
//             imageURL: "",
//             categories: "",
//             seasons: ""
//             }
//         ]
//     }],
//     selectedClothes: [{
//         top: {},
//         bottom: {}
//     }],
//     loading: false
// }