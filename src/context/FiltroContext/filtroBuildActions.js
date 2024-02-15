import { actions } from './filtroActions';

export const buildActions = (dispatch) => {
  return {
    changeFiltroField: (payload) => dispatch({ type: actions.CHANGE_FILTRO_FIELD, payload }),
    changeFiltroValue: (payload) => dispatch({ type: actions.CHANGE_FILTRO_VALUE, payload }),
    changeFiltroShowDeactive: (payload) => dispatch({ type: actions.CHANGE_FILTRO_SHOW_DEACTIVE, payload }),
    filterResults: (payload) => dispatch({ type: actions.FILTER_RESULTS, payload }),
    limparFiltro: () => { dispatch({ type: actions.CLEAN_FILTRO }); dispatch({ type: actions.CHANGE_PAGE, payload: 0 });},
    changePage: (payload) => dispatch({ type: actions.CHANGE_PAGE, payload }),
    changeTotalElements: (payload) => dispatch({ type: actions.CHANGE_TOTAL_ELEMENTS, payload }),
    changeTotalPages: (payload) => dispatch({ type: actions.CHANGE_TOTAL_PAGES, payload }),
    changeSortField: (payload) => dispatch({ type: actions.CHANGE_SORT_FIELD, payload }),
    changeSortAsc: (payload) => dispatch({ type: actions.CHANGE_SORT_ASC, payload }),
    toggleSortAsc: () => dispatch({ type: actions.TOGGLE_ASC })
  };
}