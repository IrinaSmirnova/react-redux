const initialState = '';

export default function findEmails (state=initialState, action) {
    if (action.type == 'FIND_EMAILS') {
        return action.payload;
    }
    return state;
}

