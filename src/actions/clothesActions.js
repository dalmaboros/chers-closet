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
    const isMatch = selected.top.imageURL === "https://i.imgur.com/LH4eU3x.jpg" && selected.bottom.imageURL === "https://i.imgur.com/5RGZE6c.jpg"

    if (isMatch) {
        return(dispatch) => {
            dispatch({type: 'HIDE_MODAL'})
            dispatch({type: 'DRESS_ME'})
        }
    } else {
        return(dispatch) => {
            dispatch({type: 'SHOW_MODAL'})
        }
    }
}

export const hideModal = () => {
    return(dispatch) => {
        dispatch({type: 'HIDE_MODAL'})
    }
}