import { ASYNC_ACTIONS } from "../asyncActions";

export const fetchAsyncData = async (dispatch, url = "./api.json") => {
  dispatch({ type: ASYNC_ACTIONS.FETCH_STARTED });
  try {
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: ASYNC_ACTIONS.FETCH_SUCCEEDED, payload: data });
  } catch (error) {
    dispatch({ type: ASYNC_ACTIONS.FETCH_FAILED, payload: error.message });
  }
};
