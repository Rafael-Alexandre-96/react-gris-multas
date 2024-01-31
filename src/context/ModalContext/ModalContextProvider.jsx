import { createContext, useReducer } from "react";
import { modalReducer } from "./modalReducer";
import { modalState } from "./data";
import { ACTIONS } from "../../context/ModalContext/modalAction";

export const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(modalReducer, modalState);

    const closeModal = () => {
        dispatch({ type: ACTIONS.HIDE});
    };

    const showModal = () => {
        dispatch({ type: ACTIONS.SHOW});
    };

    const showModalSuccess = (body) => {
        dispatch({ type: ACTIONS.CHANGE_TITLE, payload: "Sucesso"});
        dispatch({ type: ACTIONS.CHANGE_BODY, payload: body});
        dispatch({ type: ACTIONS.SUCCESS });
        dispatch({ type: ACTIONS.SHOW });
    };

    const showModalDanger = (body) => {
        dispatch({ type: ACTIONS.CHANGE_TITLE, payload: "Erro"});
        dispatch({ type: ACTIONS.CHANGE_BODY, payload: body});
        dispatch({ type: ACTIONS.DANGER });
        dispatch({ type: ACTIONS.SHOW });
    };
    
    return(
        <ModalContext.Provider value={{ state, closeModal, showModal, showModalSuccess, showModalDanger }}>
            {children}
        </ModalContext.Provider>
    );
}