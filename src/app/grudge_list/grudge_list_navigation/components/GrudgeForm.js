import { useState, useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

const GrudgeForm = () => {
  console.log("render grudgeForm");
  const [name, setName] = useState("");
  const [grudge, setGrudge] = useState("");
  const { createGrudge } = useContext(GrudgeListContext);
  const submitNewGrudge = (evt) => {
    evt.preventDefault();
    const hasValidGrudge = !!name && !!grudge;
    if (hasValidGrudge) {
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
