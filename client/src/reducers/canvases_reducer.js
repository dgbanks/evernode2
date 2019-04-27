import { canvasActions, currentUserActions } from "constants/action_types";

export default (prevState = {}, { type, canvas, user }) => {
  Object.freeze(prevState);
  switch (type) {
    case currentUserActions.CURRENT_USER_SUCCESS:
      return { data: user.canvases };
    case canvasActions.CANVAS_CREATE_REQUEST:
      return Object.assign({}, prevState, { creating: true });
    case canvasActions.CANVAS_CREATE_SUCCESS:
      const canvases = prevState.data;
      canvases.push(canvas);
      return { data: canvases };
    case canvasActions.CANVAS_CREATE_FAILURE:
      return prevState;
    default:
      return prevState;
  }
};
