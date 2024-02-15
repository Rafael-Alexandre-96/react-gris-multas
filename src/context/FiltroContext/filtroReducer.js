import { actions } from "./filtroActions";

export const filtroReducer = (state, action) => {
  switch(action.type) {
    case actions.CHANGE_FILTRO_FIELD: {
      return { ...state, filtro: { ...state.filtro, field: action.payload } }
    }
    case actions.CHANGE_FILTRO_VALUE: {
      return { ...state, filtro: { ...state.filtro, value: action.payload } }
    }
    case actions.CHANGE_FILTRO_SHOW_DEACTIVE: {
      return { ...state, filtro: { ...state.filtro, showDeactive: action.payload } }
    }
    case actions.FILTER_RESULTS: {
      return {
        filtro: {
          field: action.payload.field,
          value: action.payload.value,
          showDeactive: action.payload.showDeactive
        },
        pagination: {
          ...state.pagination,
          page: 0
        },
        sort: {
          sort: '',
          asc: true
        }
      }
    }
    case actions.CLEAN_FILTRO: {
      return {
        ...state,
        filtro: {
          field: '',
          value: '',
          showDeactive: true
        },
        sort: {
          sort: '',
          asc: true
        }
      }
    }
    case actions.CHANGE_PAGE: {
      return { ...state, pagination: { ...state.pagination, page: action.payload } }
    }
    case actions.CHANGE_IN_PAGE: {
      return { ...state, pagination: { ...state.pagination, inPage: action.payload } }
    }
    case actions.CHANGE_TOTAL_PAGES: {
      return { ...state, pagination: { ...state.pagination, totalPages: action.payload } }
    }
    case actions.CHANGE_TOTAL_ELEMENTS: {
      return { ...state, pagination: { ...state.pagination, totalElements: action.payload } }
    }
    case actions.CHANGE_SORT_FIELD: {
      return { ...state, sort: { ...state.sort, sort: action.payload } }
    }
    case actions.CHANGE_SORT_ASC: {
      return { ...state, sort: { ...state.sort, asc: action.payload } }
    }
    case actions.TOGGLE_ASC: {
      return { ...state, sort: { ...state.sort, asc: !state.sort.asc } }
    }
    default: {
      return { ...state }; 
    }
  }
}