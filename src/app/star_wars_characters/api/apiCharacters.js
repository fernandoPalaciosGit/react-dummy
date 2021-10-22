import IsEmpty from "lodash/isEmpty";

const API = "https://star-wars-character-search.glitch.me/api";
export const errorApi = "failed fetch";

export function getApiCharacter(id = "") {
  const resource = `${API}/characters/${id}`;
  const error = `${errorApi}: ${resource}`;

  return fetch(resource)
    .then((response) => response.json())
    .then(({ character }) => {
      return { error: IsEmpty(character) && error, character };
    })
    .catch(() => ({ error }));
}

export default function getApiCharacters() {
  const resource = `${API}/characters`;
  const error = `${errorApi}: ${resource}`;

  return fetch(resource)
    .then((response) => response.json())
    .then(({ characters }) => {
      const isLoaded = Array.isArray(characters) && characters.length > 0;
      return { error: !isLoaded && error, characters };
    })
    .catch(() => ({ error }));
}
