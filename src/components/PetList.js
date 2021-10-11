import React from 'react';
import Pet from "./Pet";

const PetList = (props) => {
    return (
        props.list.map((pet) =>(
            <Pet key={pet.id}
                 animal={pet.animal}
                 name={pet.name}
                 breed={pet.breed}
                 city={pet.city}
                 description={pet.description}
            />
        ))
    );
};

export default PetList;
