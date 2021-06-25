export const fetchClothes = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CLOTHES'})
        fetch('../clothes.json')
            .then(response => {return response.json()})
            .then(responseJSON => {
                dispatch({type: 'ADD_CLOTHES'})
            })
    }
}