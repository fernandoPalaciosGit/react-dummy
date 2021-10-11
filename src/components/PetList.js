import React from "react";
import Pet from "./Pet";

const PetList = ({ list = [] }) => {
  return (
    <div className="search">
      {list.length === 0 ? (
        <h3>No Pets Found</h3>
      ) : (
        list.map((pet) => <Pet key={pet.id} pet={pet} />)
      )}
    </div>
  );
};

export default PetList;
