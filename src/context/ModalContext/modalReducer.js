import { ACTIONS } from "./modalAction";

export const modalReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.CHANGE_TITLE: {
            return { ...state, title: action.payload }
        }
        case ACTIONS.CHANGE_BODY: {
            return { ...state, body: action.payload }
        }
        case ACTIONS.SHOW: {
            return { ...state, show: true }
        }
        case ACTIONS.HIDE: {
            return { ...state, show: false }
        }
        case ACTIONS.SUCCESS: {
            return { ...state, background: "#198754" }
        }
        case ACTIONS.WARNING: {
            return { ...state, background: "#ffc107" }
        }
        case ACTIONS.DANGER: {
            return { ...state, background: "#dc3545" }
        }
        case ACTIONS.SET_ON_YES_NO: {
            return { ...state, onYes: action.payload.onYes, onNo: action.payload.onNo }
        }
        case ACTIONS.SET_QUESTION: {
            return { ...state, question: action.payload, onYes: () => {}, onNo: () => {} }
        }
        default: {
            return { ...state }; 
        }
    } 
}