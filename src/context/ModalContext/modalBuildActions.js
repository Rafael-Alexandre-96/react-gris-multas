import { actions } from './modalActions';

export const buildActions = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: actions.HIDE}),
    showModal: () => dispatch({ type: actions.SHOW}),
    showModalSuccess: (payload) => {
      dispatch({ type: actions.SET_QUESTION, payload: false });
      dispatch({ type: actions.CHANGE_TITLE, payload: 'Sucesso' });
      dispatch({ type: actions.CHANGE_BODY, payload });
      dispatch({ type: actions.SUCCESS });
      dispatch({ type: actions.SHOW });
    },
    showModalDanger: (payload) => {
      dispatch({ type: actions.SET_QUESTION, payload: false });
      dispatch({ type: actions.CHANGE_TITLE, payload: 'Erro' });
      dispatch({ type: actions.CHANGE_BODY, payload });
      dispatch({ type: actions.DANGER });
      dispatch({ type: actions.SHOW });
    },
    showModalQuestion: (payload) => {
      dispatch({ type: actions.SET_QUESTION, payload: true });
      dispatch({ type: actions.CHANGE_TITLE, payload: 'Pergunta'});
      dispatch({ type: actions.CHANGE_BODY, payload: payload.body});
      dispatch({ type: actions.WARNING });
      dispatch({ type: actions.SET_ON_YES_NO, payload: { onYes: payload.onYes, onNo: payload.onNo }})
      dispatch({ type: actions.SHOW });
    },
  }
};
