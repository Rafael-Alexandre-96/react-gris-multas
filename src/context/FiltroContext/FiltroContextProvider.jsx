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

    return(
        <FiltroContext.Provider value={{ state, changeFiltroValue, changeFiltroShowDeactive, limparFiltro, changePage, changeTotalElements, changeTotalPages }}>
            {children}
        </FiltroContext.Provider>
    );
}