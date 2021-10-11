import React from "react";
import { useState } from "react";

const BreedList = (props) => {
  const [breed, setBreed] = useState("");

  return (
    <label htmlFor="breed-list">
      <span>Breeds</span>
      <select
        id="breed-list"
        value={breed}
        onChange={({ target }) => setBreed(target.value)}
      >
        <option />
        {props.breedList.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  );
};

export default BreedList;
