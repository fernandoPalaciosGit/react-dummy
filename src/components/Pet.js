import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ pet, id }) => {
  const image = Array.isArray(pet.images) ? pet.images[0] : "";

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.state}, ${pet.city}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
