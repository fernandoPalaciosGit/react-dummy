import { useReducer } from "react";
import IsFunction from "lodash/isFunction";

export const Actions = {
  RESET_RESPONSE: "[fetchCharacters] reset values",
  UPDATE_RESPONSE: "[fetchCharacters] download response",
};
const initCharacterResponse = {
  characters: [],
  loading: false,
  error: null,
};
const reducerCharacterResponse = (state, action) => {
  switch (action.type) {
    case Actions.RESET_RESPONSE:
      return { loading: true, error: null };
    case Actions.UPDATE_RESPONSE:
      const { error, characters } = action.payload;
      return {
        characters: !error ? characters : [],
        loading: false,
        error: error || null,
      };
    default:
      return state;
  }
};

// [PLUGIN -> useMiddleware] es una fachada sobre useReducer() que permite hacer dispatch de funciones
export const reducerCharacters = () => {
  const [response, dispatch] = useReducer(
    reducerCharacterResponse,
    initCharacterResponse
  );
  const middleware = (action) => {
    return IsFunction(action) ? action(dispatch) : dispatch(action);
  };

  return [response, middleware];
};
