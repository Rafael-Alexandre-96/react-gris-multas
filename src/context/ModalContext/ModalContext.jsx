import { createContext, useContext, useReducer, useRef } from 'react';
import { modalReducer } from './modalReducer';
import { buildActions } from './modalBuildActions';

export const initalState = {
  show: false,
  title: "modal title",
  body: "modal body",
  background: "#00aaff",
  question: false,
  onYes: () => {},
  onNo: () => {}
};

const Context = createContext();

export const ModalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(modalReducer, initalState);
  const actions = useRef(buildActions(dispatch));

  return(
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useModalContext inside <ModalContextProvider />');
  }

  return [...context];
};