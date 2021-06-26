// import uuid from 'uuid'

// export default function bottomsReducer(
//     state={
//         bottoms: [],
//         activePiece: {},
//         loading: false
//     }, 
//     action) {
//     switch (action.type) {
//         case 'SELECT_NEXT_BOTTOM':
//             return {
//                 ...state,
//                 activePiece: state.bottoms[(state.bottoms.findIndex(piece => piece === state.activePiece)) + 1]
//             }
//         case 'SELECT_PREVIOUS_BOTTOM':
//             return {
//                 ...state,
//                 activePiece: state.bottoms[(state.bottoms.findIndex(piece => piece === state.activePiece)) - 1]
//             }
//         default:
//             return state
//     }
// }

// State Structure:

// let bottom = {
//     uuid: uuid(),
//     imageUrl: '',
//     categories: [''],
//     seasons: ['']
// }