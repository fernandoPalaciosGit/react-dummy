import React from 'react';

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.name),
        React.createElement("h3", {}, props.species),
    ]);
};

export default Pet
