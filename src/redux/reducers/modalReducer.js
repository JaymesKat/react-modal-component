import actionTypes from '../constants/actionTypes';

const initialState = {
  modalType: null,
  modalProps: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case actionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
