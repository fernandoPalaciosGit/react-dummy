import React from "react";

const Pet = ({ pet, id }) => {
  const image = Array.isArray(pet.images) ? pet.images[0] : "";

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.state}, ${pet.city}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
