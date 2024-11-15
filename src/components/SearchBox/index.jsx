import React, { useState } from "react";

const SearchBox = ({searchText, functionInput}) => {

    
    return(
        <>
        <input 
        type="text"
        placeholder="Buscar.."
        name="searchText"
        value={searchText}
        onChange={(e) => functionInput(e)}
        />
        </>
    )


}

export default SearchBox;