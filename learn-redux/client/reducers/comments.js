function comments(state = [], action) {
    console.log(state, action);

    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        };
    }

    return state;    
}

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {text: action.comment, user: action.author}
            ];
        case 'REMOVE_COMMENT':
            console.log('removing a comment');
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }

}

export default comments;