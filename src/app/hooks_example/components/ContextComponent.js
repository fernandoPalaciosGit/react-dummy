import { useContext, createContext, useState } from "react";

const nameSchema = {
  genderHierarchic: 0,
  name: "",
  secondName: "",
  alias: "",
  decrementHierarchic: () => {},
};
const NameContext = createContext(nameSchema);

const FourthLevelComponent = () => {
  const user = useContext(NameContext);

  return (
    <div>
      <div>
        <button onClick={user.decrementHierarchic}>
          Decrement Hierarchic gender
        </button>
      </div>
      <span>Fourth level</span>
    </div>
  );
};

const ThirdLevelComponent = () => {
  const name = useContext(NameContext);
  return (
    <div>
      <div>
        <small>
          <strong>{JSON.stringify(name)}</strong>
        </small>
      </div>
      <span>Third level</span>
      <FourthLevelComponent />
    </div>
  );
};

const SecondLevelComponent = () => {
  return (
    <div>
      <span>Second level</span>
      <ThirdLevelComponent />
    </div>
  );
};

const FirstLevelComponent = () => {
  return (
    <div>
      <span>First level</span>
      <SecondLevelComponent />
    </div>
  );
};

const ContextComponent = () => {
  const [name, setName] = useState({
    genderHierarchic: 1,
    name: "Fernando",
    secondName: "Palacios",
    alias: "Nando",
    // aportamos cualquier callback que necesitemos en otra capa de abstraccion
    incrementHierarchic: () =>
      setName({ ...name, genderHierarchic: ++name.genderHierarchic }),
    decrementHierarchic: () =>
      setName({ ...name, genderHierarchic: --name.genderHierarchic }),
  });

  return (
    <div>
      <h3>useContext Example</h3>
      <NameContext.Provider value={name}>
        <FirstLevelComponent />
        <button onClick={name.incrementHierarchic}>
          Increment Hierarchic gender
        </button>
      </NameContext.Provider>
    </div>
  );
};

export default ContextComponent;
