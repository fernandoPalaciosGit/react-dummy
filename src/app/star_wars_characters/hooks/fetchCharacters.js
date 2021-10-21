import { Actions } from "./reducerCharacters";
import getApiCharacters, { error } from "../api/apiCharacters";

export function fetchCharacters(dispatch) {
  Promise.resolve()
    .then(() =>
      dispatch({
        type: Actions.RESET_RESPONSE,
      })
    )
    .then(getApiCharacters)
    .then(({ characters, error }) => {
      dispatch({
        type: Actions.UPDATE_RESPONSE,
        payload: { error, characters },
      });
    })
    .catch(() =>
      dispatch({
        type: Actions.UPDATE_RESPONSE,
        payload: { error },
      })
    );
}
