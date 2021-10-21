const API = "https://star-wars-character-search.glitch.me/api";
export const error = "failed fetch";

export default function getApiCharacters() {
  return fetch(`${API}/characters`)
    .then((response) => response.json())
    .then(({ characters }) => {
      const isLoaded = Array.isArray(characters) && characters.length > 0;
      return { error: !isLoaded && error, characters };
    })
    .catch(() => ({ error }));
}
