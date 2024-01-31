import { createContext, useReducer } from "react";
import { veiculoReducer } from "./veiculoReducer";
import { veiculoState } from "./data";
import { ACTIONS } from "../../context/VeiculoContext/veiculoAction";

export const VeiculoContext = createContext();

export const VeiculoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(veiculoReducer, veiculoState);

    const changeFiltroValue = (value) => {
        dispatch({ type: ACTIONS.CHANGE_FILTRO_VALUE, payload: value });
    };

    const changeFiltroShowDeactive = (value) => {
        dispatch({ type: ACTIONS.CHANGE_FILTRO_SHOW_DEACTIVE, payload: value });
    };

    const limparFiltro = () => {
        dispatch({ type: ACTIONS.CLEAN_FILTRO });
    };

    return(
        <VeiculoContext.Provider value={{ state, changeFiltroValue, changeFiltroShowDeactive, limparFiltro }}>
            {children}
        </VeiculoContext.Provider>
    );
}