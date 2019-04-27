import { uiActions } from "constants/action_types";
const { TOGGLE_FORM } = uiActions;
export const toggleForm = () => dispatch => dispatch(({ type: TOGGLE_FORM }));
