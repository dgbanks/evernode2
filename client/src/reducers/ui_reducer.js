import { uiActions } from "constants/action_types";

const state = { formOpen: false };

export default (prevState = state, { type }) => {
  Object.freeze(prevState);
  switch (type) {
    case uiActions.TOGGLE_FORM:
      return { formOpen: !prevState.formOpen };
    default:
      return prevState
  }
};
