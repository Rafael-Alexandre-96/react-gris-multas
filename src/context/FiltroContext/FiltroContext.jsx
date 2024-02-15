import { createContext, useContext, useReducer, useRef } from 'react';
import { filtroReducer } from './filtroReducer';
import { buildActions } from './filtroBuildActions';

export const initalState = {
  filtro: {
    field: '',
    value: '',
    showDeactive: true
  },
  pagination: {
    page: 0,
    inPage: 5,
    totalPages: 1,
    totalElements: 0
  },
  sort: {
    sort: '',
    asc: true
  }
};

const Context = createContext();

export const FiltroContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(filtroReducer, initalState);
  const actions = useRef(buildActions(dispatch));

  return(
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
  );
};

export const useFiltroContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useCounterContext inside <FiltroContextProvider />');
  }

  return [...context];
}