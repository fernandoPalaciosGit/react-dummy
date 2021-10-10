const animalData = [
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

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.species),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Page Thumbnail"),
    animalData.map((animal) => React.createElement(Pet, animal))
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

// const component = React.createElement(() => {
//     return React.createElement("h1", {}, 'Page Thumbnail');
// });
// ReactDOM.render(component, document.getElementById('root'));
