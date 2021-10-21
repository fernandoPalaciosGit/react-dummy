import { useState, useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

// memo -> solo se ejecurtara esta funcion de react cuando cambie la referencia de createNewGrudge() [se lance el dispatch]
const GrudgeForm = () => {
  console.log("render grudgeForm");
  const [name, setName] = useState("");
  const [grudge, setGrudge] = useState("");
  const { createGrudge } = useContext(GrudgeListContext);
  const submitNewGrudge = (evt) => {
    evt.preventDefault();
    if (!!name && !!grudge) {
      createGrudge(name, grudge);
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
};

export default GrudgeForm;
