import React from 'react';
import {useState} from 'react';

const ANIMALS = ['dog', 'cat', 'bird', 'horse'];

const SearchParameters = (props) => {
    const [location, setLocation] = useState(props.location);
    const [animal, setAnimal] = useState('');

    function onChangeSearchLocation({target}) {
        setLocation(target.value);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="search-location">
                    <span>Location</span>
                    <input id="search-location" type="text" placeholder="location"
                           onChange={onChangeSearchLocation} value={location}/>
                </label>
                <button type="submit">Submit</button>

                <label htmlFor="animal-list">
                    <span>Animals</span>
                    <select id="animal-list"
                            value={animal} onChange={({target}) => setAnimal(target.value)}>
                        <option/>
                        {ANIMALS.map((animal) => (<option key={animal} value={animal}>{animal}</option>))}
                    </select>
                </label>
            </form>
        </div>
    );
};

export default SearchParameters;
