import { createContext, useReducer } from "react";
import { filtroReducer } from "./filtroReducer";
import { filtroState } from "./data";
import { ACTIONS } from "../../context/FiltroContext/filtroAction";

export const FiltroContext = createContext();

export const FiltroContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(filtroReducer, filtroState);

    const changeFiltroValue = (value) => {
        dispatch({ type: ACTIONS.CHANGE_FILTRO_VALUE, payload: value });
    };

    const changeFiltroShowDeactive = (value) => {
        dispatch({ type: ACTIONS.CHANGE_FILTRO_SHOW_DEACTIVE, payload: value });
    };

    const filterResults = (value) => {
        dispatch({ type: ACTIONS.FILTER_RESULTS, payload: value });
    }

    const limparFiltro = () => {
        dispatch({ type: ACTIONS.CLEAN_FILTRO });
        dispatch({ type: ACTIONS.CHANGE_PAGE, payload: 0 });
    };

    const changePage = (value) => {
        dispatch({ type: ACTIONS.CHANGE_PAGE, payload: value });
    };

    const changeTotalElements = (value) => {
        dispatch({ type: ACTIONS.CHANGE_TOTAL_ELEMENTS, payload: value });
    };

    const changeTotalPages = (value) => {
        dispatch({ type: ACTIONS.CHANGE_TOTAL_PAGES, payload: value });
    };

    const changeSortField = (value) => {
        dispatch({ type: ACTIONS.CHANGE_SORT_FIELD, payload: value })
    };

    const changeSortAsc = (value) => {
        dispatch({ type: ACTIONS.CHANGE_SORT_ASC, payload: value })
    }

    const toggleSortAsc = () => {
        dispatch({ type: ACTIONS.TOGGLE_ASC })
    }

    return(
        <FiltroContext.Provider value={{ state, changeFiltroValue, changeFiltroShowDeactive, filterResults, limparFiltro, changePage, changeTotalElements, changeTotalPages, changeSortField, changeSortAsc, toggleSortAsc }}>
            {children}
        </FiltroContext.Provider>
    );
}