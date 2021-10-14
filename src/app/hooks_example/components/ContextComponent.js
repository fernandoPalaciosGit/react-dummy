import { useContext, createContext, useState } from "react";

const nameSchema = {
  genderHierarchic: 0,
  name: "",
  secondName: "",
  alias: "",
};
const NameContext = createContext([nameSchema, (obj) => obj]);

const FourthLevelComponent = () => {
  const name = useContext(NameContext);
  return (
    <div>
      <span>Fourth level</span>
      <div>
        <small>
          <strong>{JSON.stringify(name)}</strong>
        </small>
      </div>
    </div>
  );
};

const ThirdLevelComponent = () => {
  return (
    <div>
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
  });
  const updateHierarchic = () =>
    setName({ ...name, genderHierarchic: ++name.genderHierarchic });

  return (
    <div>
      <h3>useContext Example</h3>
      <NameContext.Provider value={name}>
        <FirstLevelComponent />
        <button onClick={updateHierarchic}>update Hierarchic gender</button>
      </NameContext.Provider>
    </div>
  );
};

export default ContextComponent;
