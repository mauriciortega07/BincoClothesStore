import React, { useState } from "react";
import { InputSearchBox, LabelSearchBox, SectionSearchBox } from "./styles";

const SearchBox = ({searchText, functionInput}) => {

    
    return(
        <SectionSearchBox>
        <LabelSearchBox for="searchBox">Bucas algo en especial?</LabelSearchBox> 
        <InputSearchBox 
        id="searchBox"
        type="text"
        placeholder="Buscar.."
        role="searchbox"
        name="searchText"
        value={searchText}
        onChange={(e) => functionInput(e)}
        />
        </SectionSearchBox>
    )


}

export default SearchBox;