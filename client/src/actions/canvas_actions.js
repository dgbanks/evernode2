import { Canvases } from "utils/api";
import { canvasActions } from "constants/action_types";

const {
  CANVAS_CREATE_REQUEST,
  CANVAS_CREATE_SUCCESS,
  CANVAS_CREATE_FAILURE
} = canvasActions;

const createRequest = () => ({ type: CANVAS_CREATE_REQUEST });
const createSuccess = canvas => ({ type: CANVAS_CREATE_SUCCESS, canvas });
const createFailure = () => ({ type: CANVAS_CREATE_FAILURE });

export const createCanvas = canvas => dispatch => {
  dispatch(createRequest());
  Canvases.create(canvas)
    .then(res => dispatch(createSuccess(res.data.canvas)))
    .catch(res => dispatch(createFailure()))
};
