import { ASYNC_ACTIONS } from "./asyncActions";

export const fetchAsyncData = async (dispatch, url = "./api.json") => {
  dispatch({ type: ASYNC_ACTIONS.START });
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: ASYNC_ACTIONS.SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ASYNC_ACTIONS.ERROR, payload: err.message });
  }
};
