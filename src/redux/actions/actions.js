import axios from 'axios';

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        product: product
    }
}

export const deleteCart = (index) => {
    return {
        type: "DELETE_CART",
        index: index
    }
}

const postLoading = () => {
    return {
        type: "POST_LOADING"
    }
}

const postSuccess = (data) => {
    return {
        type: "POST_SUCCESS",
        data: data
    }
}

const postError = (err) => {
    return {
        type: "POST_ERROR",
        err: err
    }
}

export const getPostThunk = () => {
    return (dispatch) => {
        dispatch(postLoading())
        axios.get('https://jsonplaceholder.typicode.com/post')
        .then((response) => {
            dispatch(postSuccess(response.data))
        })
        .catch((err) => {
            dispatch(postError(err))
        })
    }
} 
