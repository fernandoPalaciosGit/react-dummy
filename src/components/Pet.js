import React from "react";

const Pet = ({ pet, id }) => {
  return (
    <div id={id}>
      <h2>{pet.name}</h2>
      <h3>
        {pet.animal}, {pet.breed}
      </h3>
      <h4>{pet.city}</h4>
      <div>{pet.description}</div>
    </div>
  );
};

export default Pet;
