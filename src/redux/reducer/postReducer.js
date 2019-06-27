export const postReducer = (postState = { 
    loading: false, 
    posts: null, 
    error: null 
}, action) => {
    switch (action.type) {
        case "POST_LOADING": return {...postState, loading: true}
        case "POST_SUCCESS": return {...postState, loading: false, posts: action.data}
        case "POST_ERROR": return {...postState, loading: false, error: action.err}
        default: return postState;
    }
}