import { useEffect } from "react";
import { Actions, reducerCharacters } from "./reducerCharacters";
import getApiCharacters from "../api/apiCharacters";

export function loadCharacters() {
  const [response, dispatch] = reducerCharacters();

  useEffect(async () => {
    dispatch({
      type: Actions.RESET_RESPONSE,
    });
    const { error, characters } = await getApiCharacters();
    dispatch({
      type: Actions.UPDATE_RESPONSE,
      payload: { error, characters },
    });
  }, []);

  return response;
}
