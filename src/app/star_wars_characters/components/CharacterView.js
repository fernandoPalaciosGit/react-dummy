import { useReducer, useEffect } from "react";
import { getApiCharacter } from "../api/apiCharacters";
import prettyJson from "json-pretty-html";

const initCharacterResponse = {
  character: null,
  error: null,
};
const Actions = {
  UPDATE_CHARACTER: "UPDATE_CHARACTER",
};
const characterResponse = (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_CHARACTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default function CharacterView({ match }) {
  const [{ character, error }, dispatch] = useReducer(
    characterResponse,
    initCharacterResponse
  );
  const characterId = match.params.id;

  useEffect(async () => {
    dispatch({
      type: Actions.UPDATE_CHARACTER,
      payload: await getApiCharacter(characterId),
    });
  }, [characterId]);

  return (
    <section className="CharacterView">
      {error ? (
        <strong>{error}</strong>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: prettyJson(character) }}></div>
      )}
    </section>
  );
}
