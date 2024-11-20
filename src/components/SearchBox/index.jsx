import React, { useState } from "react";
import { SectionSearchBox } from "./styles";

const SearchBox = ({searchText, functionInput}) => {

    
    return(
        <SectionSearchBox>
        <p style={{margin:'1vw'}}>Bucas algo en especial?</p> 
        <input 
        type="text"
        placeholder="Buscar.."
        name="searchText"
        value={searchText}
        onChange={(e) => functionInput(e)}
        style={{margin:'.5vw'}}
        />
        </SectionSearchBox>
    )


}

export default SearchBox;