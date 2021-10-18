import React from "react";
import { Link } from "react-router-dom";

const defaultImage = "http://pets-images.dev-apis.com/pets/none.jpg";
const getImage = (images = []) =>
  Array.isArray(images) && images.length > 0 ? images[0] : defaultImage;

const Pet = ({ pet = {} }) => {
  return (
    <Link to={`/details/${pet.id}`} className="pet">
      <div className="image-container">
        <img
          src={getImage(pet.images || [])}
          alt="pet image"
          data-testid="thumbnail"
        />
      </div>
      <div className="info">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.state}, ${pet.city}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
