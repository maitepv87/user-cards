import { useReducer } from "react";
import { ASYNC_ACTIONS } from "./asyncActions";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ASYNC_ACTIONS.FETCH_STARTED:
      return { ...state, loading: true, error: null };
    case ASYNC_ACTIONS.FETCH_SUCCEEDED:
      return { ...state, loading: false, data: action.payload };
    case ASYNC_ACTIONS.FETCH_FAILED:
      return { ...state, loading: false, error: action.payload };
    case ASYNC_ACTIONS.RESET_STATE:
      return initialState;
    case ASYNC_ACTIONS.UPDATE_USER:
      return {
        ...state,
        data: state.data.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};

export const useAsyncReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
