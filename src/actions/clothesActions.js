export const fetchClothes = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CLOTHES'})
        fetch('./clothes.json')
            .then(response => response.json())
            .then(payload => {
                dispatch({type: 'LOAD_CLOTHES', payload})
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

export const determineMatch = (selected) => {
    return(dispatch) => {
        dispatch({type: 'DETERMINE_MATCH', selected})
    }
}