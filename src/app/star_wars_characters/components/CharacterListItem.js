import { Link } from "react-router-dom";

export default function CharacterListItem({ character }) {
  const { id, name } = character;
  return (
    <article className="CharacterListItem">
      <Link className="CharacterListItemLink" to={`/characters/${id}`}>
        {name}
      </Link>
    </article>
  );
}
