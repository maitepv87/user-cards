import { useReducer } from "react";
import { ASYNC_ACTIONS } from "./asyncActions";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ASYNC_ACTIONS.START:
      return { ...state, loading: true, error: null };
    case ASYNC_ACTIONS.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ASYNC_ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload };
    case ASYNC_ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

export const useAsyncReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
