import { createContext, useReducer } from "react";
import { modalReducer } from "./modalReducer";
import { modalState } from "./data";

export const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(modalReducer, modalState);
    
    return(
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    );
}