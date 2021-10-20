import { getNewGrudge } from "../../mocks/initial_grudge_list";
import { useState } from "react";

export function GrudgeForm({ createNewGrudge }) {
  const [name, setName] = useState("");
  const [grudge, setGrudge] = useState("");
  const submitNewGrudge = (evt) => {
    evt.preventDefault();
    if (!!name && !!grudge) {
      createNewGrudge(getNewGrudge(name, grudge));
      setName("");
      setGrudge("");
    }
  };

  return (
    <form className="NewGrudge" onSubmit={submitNewGrudge}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={grudge}
        onChange={({ currentTarget }) => setGrudge(currentTarget.value)}
      />
      <input className="NewGrudge-submit button" type="submit" value="Submit" />
    </form>
  );
}
