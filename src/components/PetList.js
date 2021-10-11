import React from 'react';
import Pet from "./Pet";

const petsData = [
    {
        animal: "Dog",
        name: "Nero",
        species: "Scottish terrier",
    },
    {
        animal: "Bird",
        name: "Luna",
        species: "papagallo",
    },
    {
        animal: "Fish",
        name: "Wanda",
        species: "Perca",
    },
];

const PetList = () => {
    return (
        petsData.map((pet) => <Pet animal={pet.animal} name={pet.name} species={pet.species}/>)
    );
};

export default PetList;
