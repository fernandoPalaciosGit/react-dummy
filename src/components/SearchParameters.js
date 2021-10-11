import React from 'react';
import {useState} from 'react';

const SearchParameters = (props) => {
    const [location, setLocation] = useState(props.location);

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
            </form>
        </div>
    );
};

export default SearchParameters;
