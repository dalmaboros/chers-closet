export const fetchClothes = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CLOTHES'})
        let clothes = {}
        fetch('/api/v1/tops')
            .then(response => response.json())
            .then(tops => {
                clothes = {tops}
                return fetch('/api/v1/bottoms')
            })
            .then(response => response.json())
            .then(bottoms => {
                clothes = {
                    ...clothes,
                    bottoms
                }
                dispatch({type: 'LOAD_CLOTHES', payload: clothes})
            })
    }
}

export const selectNextPiece = (category) => {
    return(dispatch) => {
        dispatch({type: 'SELECT_NEXT_PIECE', category: category})
    }
}

export const selectPreviousPiece = (category) => {
    return(dispatch) => {
        dispatch({type: 'SELECT_PREVIOUS_PIECE', category: category})
    }
}