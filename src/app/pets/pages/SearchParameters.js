import React from "react";
import { useState, useEffect, useContext } from "react";
import PetList from "../components/PetList";
import useBreedList from "../hooks/useBreedList";
import { ReaderMode } from "../providers/ReaderMode";

const API = "https://pets-v2.dev-apis.com/pets";
const ANIMALS = ["dog", "cat", "bird", "horse"];

const SearchParameters = (props) => {
  const [location, setLocation] = useState(props.location);
  const [breed, setBreed] = useState("");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds, statusBreeds] = useBreedList(animal);
  const theme = useContext(ReaderMode);

  function onDestroyComponent() {
    console.log("---------> Destroyed component");
  }

  async function requestPets() {
    const getter = await fetch(
      `${API}?animal=${animal}&location=${location}&breed=${breed}`
    ).then((pets) => pets.json());
    setPets(getter.pets);
  }

  // useEffect permite sincronizar datos fuera del contexto del componente (fetch()) y sincronizarlos con modelo de datos (hook -> setPets())
  // segundo parametro [input] -> permite asignar el effect a un hook, por ejemplo [animal] : se sincronizara el effect cuando cambie el valor del hook animal
  useEffect(() => {
    requestPets();
    return () => onDestroyComponent();
  }, [animal, breed, location]);

  return (
    <div className={`search-params ${theme} my-0 mx-auto w-11/12`}>
      <h2>Search Pets Page</h2>
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(evt) => {
          evt.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="search-location" className="search-label">
          <span>Location</span>
          <input
            className="search-control"
            id="search-location"
            type="text"
            placeholder="location"
            onChange={({ target }) => setLocation(target.value)}
            value={location}
          />
        </label>

        <label htmlFor="animal-list" className="search-label">
          <span>Animals</span>
          <select
            className="search-control"
            id="animal-list"
            value={animal}
            onChange={({ target }) => setAnimal(target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed-list" className="search-label">
          <span>Breeds {statusBreeds}</span>
          <select
            className="search-control disabled:opacity-50"
            disabled={breeds.length === 0}
            id="breed-list"
            value={breed}
            onChange={({ target }) => setBreed(target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button
          style={{ backgroundColor: "#2563eb" }}
          className="rounded px-6 py-2 color text-white hover:opacity-50 border-none"
          type="submit"
        >
          Submit
        </button>
      </form>
      <PetList list={pets} />
    </div>
  );
};

export default SearchParameters;
