import CharacterListItem from "./CharacterListItem";

export default function CharacterList({ characters }) {
  return (
    <section className="CharacterList">
      {characters.map((character) => (
        <CharacterListItem key={character.id} character={character} />
      ))}
    </section>
  );
}
