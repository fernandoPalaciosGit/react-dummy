import React, { useState, useEffect, useReducer } from "react";
import PetList from "../components/PetList";
import useBreedList from "../hooks/useBreedList";
import { useSelector } from "react-redux";

const API = "https://pets-v2.dev-apis.com/pets";
const fetchPets = (location, animal, breed) =>
  fetch(`${API}?animal=${animal}&location=${location}&breed=${breed}`)
    .then((pets) => pets.json())
    .then(({ pets }) => pets);
const ANIMALS = ["dog", "cat", "bird", "horse"];
const initFormState = {
  controlLocation: "Honolulu",
  controlAnimal: "dog",
  controlBreed: "Labrador",
};

// creamos un reducer para gestionar el estado del formulario
// defiunimos el estado del formulatio como un objeto {[name input]: [value input]}
// como lo principarl es actualizar el valor del input, las acciones sobre el reducer [actionForm] seran la misma {[name input]: [value input]}
const useFormState = (initValue) => {
  const [formState, dispatchFormAction] = useReducer(
    (formState, actionForm) => {
      return { ...formState, ...actionForm };
    },
    initValue
  );
  const setFormState = (actionForm) => dispatchFormAction(actionForm);

  return [formState, setFormState];
};

const SearchParameters = () => {
  const theme = useSelector((store) => store.theme);
  const [{ controlLocation, controlAnimal, controlBreed }, updateForm] =
    useFormState(initFormState);
  const [breeds, statusBreeds] = useBreedList(controlAnimal);
  const [pets, setPets] = useState([]);
  const updateInput = ({ target }) =>
    updateForm({ [target.name]: [target.value] });
  const updateAnimal = ({ target }) =>
    updateForm({ controlAnimal: target.value, controlBreed: "" });
  const updatePets = async () =>
    setPets(await fetchPets(controlLocation, controlAnimal, controlBreed));

  useEffect(updatePets, [controlLocation, controlAnimal, controlBreed]);

  return (
    <div className={`search-params ${theme} my-0 mx-auto w-11/12`}>
      <h2>Search Pets Page</h2>
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(evt) => {
          evt.preventDefault();
          updatePets();
        }}
      >
        <label htmlFor="controlLocation" className="search-label">
          <span>Location</span>
          <input
            className="search-control"
            name="controlLocation"
            id="controlLocation"
            type="text"
            placeholder="location"
            onChange={updateInput}
            value={controlLocation}
          />
        </label>

        <label htmlFor="controlAnimal" className="search-label">
          <span>Animals</span>
          <select
            className="search-control"
            name="controlAnimal"
            id="controlAnimal"
            value={controlAnimal}
            onChange={updateAnimal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="controlBreed" className="search-label">
          <span>Breeds {statusBreeds}</span>
          <select
            className="search-control disabled:opacity-50"
            disabled={breeds.length === 0}
            name="controlBreed"
            id="controlBreed"
            value={controlBreed}
            onChange={updateInput}
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
