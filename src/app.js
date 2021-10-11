import React from 'react';
import ReactDOM from 'react-dom';
import PetList from "./components/PetList";
import SearchParameters from "./components/SearchParameters";

const App = () => {
    return (
        <div>
            <h1>Page Thumbnail</h1>
            <PetList/>
            <SearchParameters location="Palma de Mallorca"/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
