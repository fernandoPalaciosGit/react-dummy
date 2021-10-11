import React from 'react';

const Pet = (props) => {
    return (
        <div id={'my pet'}>
            <h2>{props.name}</h2>
            <h3>{props.animal}, {props.breed}</h3>
            <h4>{props.city}</h4>
            <div>{props.description}</div>
        </div>
    );
};

export default Pet
