import { useEffect, useReducer } from "react";

const API = "https://star-wars-character-search.glitch.me/api";
const error = "failed fetch";
const getCharacters = async () => {
  return await fetch(`${API}/characters`)
    .then((response) => response.json())
    .then(({ characters }) =>
      Array.isArray(characters) && characters.length > 0
        ? { characters }
        : { error }
    )
    .catch(() => ({ error }));
};
const Actions = {
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
const getApiResponse = () =>
  useReducer(reducerCharacterResponse, initCharacterResponse);

export function fetchCharacters() {
  const [response, dispatch] = getApiResponse();

  useEffect(async () => {
    dispatch({
      type: Actions.RESET_RESPONSE,
    });
    const { error, characters } = await getCharacters();
    dispatch({
      type: Actions.UPDATE_RESPONSE,
      payload: { error, characters },
    });
  }, []);

  return response;
}
