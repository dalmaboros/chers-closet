export const fetchClothes = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CLOTHES'})
        fetch('./clothes.json')
            .then(response => response.json())
            .then(clothes => {
                dispatch({type: 'LOAD_CLOTHES', clothes})
            })
    }
}

export const selectNextPiece = (category) => {
    return(dispatch) => {
        dispatch({type: 'SELECT_NEXT_PIECE', category: category})
    }
}