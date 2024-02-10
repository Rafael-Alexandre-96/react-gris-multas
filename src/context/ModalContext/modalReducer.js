import { actions } from "./modalActions";

export const modalReducer = (state, action) => {
  switch(action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload }
    }
    case actions.CHANGE_BODY: {
      return { ...state, body: action.payload }
    }
    case actions.SHOW: {
      return { ...state, show: true }
    }
    case actions.HIDE: {
      return { ...state, show: false }
    }
    case actions.SUCCESS: {
      return { ...state, background: "#198754" }
    }
    case actions.WARNING: {
      return { ...state, background: "#ffc107" }
    }
    case actions.DANGER: {
      return { ...state, background: "#dc3545" }
    }
    case actions.SET_ON_YES_NO: {
      return { ...state, onYes: action.payload.onYes, onNo: action.payload.onNo }
    }
    case actions.SET_QUESTION: {
      return { ...state, question: action.payload, onYes: () => {}, onNo: () => {} }
    }
    default: {
      return { ...state }; 
    }
  } 
}