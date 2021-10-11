import React from 'react';
import {useState} from 'react';

const AnimalList = (props) => {
    const [animal, setAnimal] = useState('');

    return (
        <label htmlFor="animal-list">
            <span>Animals</span>
            <select id="animal-list"
                    value={animal} onChange={({target}) => setAnimal(target.value)}>
                <option/>
                {props.animalList.map((animal) => (<option key={animal} value={animal}>{animal}</option>))}
            </select>
        </label>
    );
};

export default AnimalList;
