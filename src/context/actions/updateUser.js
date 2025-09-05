import { ASYNC_ACTIONS } from "../asyncActions";

export const updateUser = (dispatch) => {
  dispatch({
    type: ASYNC_ACTIONS.UPDATE_USER,
    payload: {
      id: 4,
      name: "Cody Fisher",
      age: 27,
      profession: "Senior Web Developer",
    },
  });
};
