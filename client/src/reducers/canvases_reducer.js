import { canvasActions } from "constants/action_types";

const state = {
  canvas: null,
  formSubmit: false
};

export default (prevState = state, { canvas, type }) => {
  Object.freeze(prevState);
  switch (type) {
    case canvasActions.CANVAS_CREATE_REQUEST:
      return { formSubmit: true };
    case canvasActions.CANVAS_CREATE_SUCCESS:
    return { formSubmit: false, canvas: canvas };
    case canvasActions.CANVAS_CREATE_FAILURE:
      return prevState;
    default:
      return prevState;
  }
};
