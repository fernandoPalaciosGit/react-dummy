import React from 'react';
import {useState, useEffect} from 'react';
import PetList from "./PetList";

const API = 'https://pets-v2.dev-apis.com/pets';
const ANIMALS = ['dog', 'cat', 'bird', 'horse'];
const BREED_LIST = [];

const SearchParameters = (props) => {
    const [location, setLocation] = useState(props.location);
    const [breed, setBreed] = useState('');
    const [animal, setAnimal] = useState('');
    const [pets, setPets] = useState([]);

    function onDestroyComponent() {
        console.log('---------> Destroyed component')
    }

    async function getPets() {
        const getter = await fetch(`${API}?animal=${animal}&location=${location}&breed=${breed}`).then((pets) => pets.json());
        setPets(getter.pets);
    }

    // useEffect permite sincronizar datos fuera del contexto del componente (fetch()) y sincronizarlos con modelo de datos (hook -> setPets())
    // segundo parametro [input] -> permite asignar el effect a un hook, por ejemplo [animal] : se sincronizara el effect cuando cambie el valor del hook animal
    useEffect(() => {
        getPets();
        return () => onDestroyComponent()
    }, [animal]);

    return (
        <div className="search-params">
            <form>
                <label htmlFor="search-location">
                    <span>Location</span>
                    <input id="search-location" type="text" placeholder="location"
                           onChange={({target}) => setLocation(target.value)} value={location}/>
                </label>

                <label htmlFor="animal-list">
                    <span>Animals</span>
                    <select id="animal-list"
                            value={animal} onChange={({target}) => setAnimal(target.value)}>
                        <option/>
                        {ANIMALS.map((animal) => (<option key={animal} value={animal}>{animal}</option>))}
                    </select>
                </label>

                <label htmlFor="breed-list">
                    <span>Breeds</span>
                    <select id="breed-list"
                            value={breed} onChange={({target}) => setBreed(target.value)}>
                        <option/>
                        {BREED_LIST.map((breed) => (<option key={breed} value={breed}>{breed}</option>))}
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
            <PetList list={pets}/>
        </div>
    );
};

export default SearchParameters;
