/**
 * useFormReducer
 *
 * Custom React hook to manage form state using useReducer.
 * Designed for scalable, accessible forms without external libraries.
 *
 * @param {Object} initialState - Object representing the default form fields.
 * @returns {Object} - { state, dispatch, onChange, onReset }
 *
 * Usage:
 * 1. Define your initial form state structure and pass it as an argument.
 * 2. Attach `onChange` to each form input using the `name` attribute.
 * 3. Supports text, checkbox, radio, and custom input types.
 *
 * Example:
 * const initialForm = { email: '', agree: false }
 * const { state, onChange, onReset } = useFormReducer(initialForm)
 * <input name="email" value={state.email} onChange={onChange} />
 */

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return action.initialState;
    default:
      return state;
  }
}

export function useFormReducer(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "CHANGE",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  const onReset = () => dispatch({ type: "RESET", initialState });

  return {
    state,
    dispatch,
    onChange,
    onReset,
  };
}
