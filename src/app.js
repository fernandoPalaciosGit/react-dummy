import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./components/Pet";

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

const App = () => {
    return (
        <div>
            <h1>Page Thumbnail</h1>
            {petsData.map((pet) => <Pet animal={pet.animal} name={pet.name} species={pet.species}/>)}
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
