import { ACTIONS } from "./filtroAction";

export const filtroReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.CHANGE_FILTRO_VALUE: {
            return { ...state, filtro: { ...state.filtro, value: action.payload } }
        }
        case ACTIONS.CHANGE_FILTRO_SHOW_DEACTIVE: {
            return { ...state, filtro: { ...state.filtro, showDeactive: action.payload } }
        }
        case ACTIONS.CLEAN_FILTRO: {
            return {
                ...state,
                filtro: {
                    value: '',
                    showDeactive: true
                },
                sort: {
                    field: "",
                    asc: true
                }
            }
        }
        case ACTIONS.CHANGE_PAGE: {
            return { ...state, pagination: { ...state.pagination, page: action.payload } }
        }
        case ACTIONS.CHANGE_IN_PAGE: {
            return { ...state, pagination: { ...state.pagination, inPage: action.payload } }
        }
        case ACTIONS.CHANGE_TOTAL_PAGES: {
            return { ...state, pagination: { ...state.pagination, totalPages: action.payload } }
        }
        case ACTIONS.CHANGE_TOTAL_ELEMENTS: {
            return { ...state, pagination: { ...state.pagination, totalElements: action.payload } }
        }
        case ACTIONS.CHANGE_SORT_FIELD: {
            return { ...state, sort: { ...state.sort, field: action.payload } }
        }
        case ACTIONS.CHANGE_SORT_ASC: {
            return { ...state, sort: { ...state.sort, asc: action.payload } }
        }
        case ACTIONS.TOGGLE_ASC: {
            return { ...state, sort: { ...state.sort, asc: !state.sort.asc } }
        }
        default: {
            return { ...state }; 
        }
    }
}