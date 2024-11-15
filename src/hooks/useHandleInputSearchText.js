import React, { useState } from "react";

const useHandleInputSearchText = () => {
    const [searchText, setSearchText] = useState({
        searchText: ""
    });

    const handleInputSearchText = (e) => {
        const {name, value} = e.target;
        setSearchText(
            {
                ...searchText, [name]: value
            }
        );
    }

    console.log(searchText)



    return {searchText, handleInputSearchText}

}

export default useHandleInputSearchText;