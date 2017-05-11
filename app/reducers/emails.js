const initialState = [];

export default function emails (state=initialState, action) {
    if (action.type == 'FORM_SUBMIT') {
        return [...state, action.payload];
    }
    return state;
}
