import CharacterList from "./CharacterList";
import { fetchCharacters } from "../hooks/fetchCharacters";
import { loadCharacters } from "../hooks/loadCharacters";
import { reducerCharacters } from "../hooks/reducerCharacters";

const Sidebar = ({ children, characters, loading, error }) => {
  return (
    <section className="sidebar">
      {children}
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
  );
};

export function ApplicationOnLoadCharacters() {
  const response = loadCharacters();

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <Sidebar {...response} />
      </main>
    </div>
  );
}

export function ApplicationFetchCharacters() {
  const [response, dispatch] = reducerCharacters();

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          <Sidebar {...response}>
            <button onClick={() => dispatch(fetchCharacters)}>
              Fetch Characters
            </button>
          </Sidebar>
        </section>
      </main>
    </div>
  );
}
