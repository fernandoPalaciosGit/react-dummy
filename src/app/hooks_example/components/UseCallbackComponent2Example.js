import { memo, useState, useCallback } from "react";

const fetchPets = (num) => {
  const pets = [...new Array(num)].map((val, idx) => `pet-${idx}`);
  // return new Promise((success) => setTimeout(() => success(pets), 1000));
  return pets;
};

const RenderPets = memo(({ numberPets, logPet }) => {
  const pets = fetchPets(numberPets);
  return (
    <div>
      <strong>PETS: </strong>
      {pets.map((pet, index) => (
        <span key={pet} data-pet={pet} onClick={logPet}>
          pet-{index},{" "}
        </span>
      ))}
    </div>
  );
});

const UseCallbackComponent2Example = () => {
  const [numPets, setNumPets] = useState(0);
  const logPet = ({ currentTarget }) => alert(currentTarget.dataset.pet);

  return (
    <div>
      <button onClick={() => setNumPets(numPets + 1)}>
        add {numPets + 1} pets
      </button>
      <RenderPets numberPets={numPets} logPet={useCallback(logPet)} />
    </div>
  );
};

export default UseCallbackComponent2Example;
