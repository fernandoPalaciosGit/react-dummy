import CharacterList from "./CharacterList";
import { fetchCharacters } from "../hooks/fetchCharacters";

export default function Application() {
  const { characters, loading, error } = fetchCharacters();

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? (
            <div>loading characters</div>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && (
            <div>
              <h2>Error loading Characters</h2> <small>{error}</small>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
