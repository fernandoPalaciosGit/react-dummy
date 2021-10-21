export default function CharacterListItem({ character }) {
  const { id, name } = character;
  return (
    <article className="CharacterListItem">
      <a className="CharacterListItemLink" href={`/characters/${id}`}>
        {name}
      </a>
    </article>
  );
}
