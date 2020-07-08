import React from "react";

function Search(props) {
    return (

        <div className="text-center">
            <input
                onChange={props.handleInputChange}
                value={props.Search}
                name="search"
                type="text"
                placeholder="Search"
                id="search"
            />


        </div>

    );
}

export default Search;