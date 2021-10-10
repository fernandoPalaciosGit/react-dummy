import React from 'react';

const Pet = (props) => {
    return (
        <div id={'my pet'}>
            <h2>{props.animal}</h2>
            <h3>{props.name}</h3>
            <h3>{props.species}</h3>
        </div>
    );
};

export default Pet
