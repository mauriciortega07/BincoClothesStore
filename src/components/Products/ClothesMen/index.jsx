import React, { useState } from "react";
import useGetData from "../../../hooks/useGetData";
import Header from "../../Header";
import renderAll from "../RenderResults";
import Footer from "../../Footer";
import useHandleInputChangeAndSubmit from "../../../hooks/useHandleInputChangeAndSubmit";
import SearchBox from "../../SearchBox";
import useHandleInputSearchText from "../../../hooks/useHandleInputSearchText";

const ClothesMen = () => {

    const { searchText, handleInputSearchText } = useHandleInputSearchText();

    const { products, isLoading, error } = useGetData("https://fakestoreapi.com/products/category/men's%20clothing");

    return (
        <>
            <Header />
            <main>
                <SearchBox searchText={searchText.searchText} functionInput={handleInputSearchText} />
                {renderAll(isLoading, error, products, searchText)}
            </main>
            <Footer />
        </>

    )

}

export default ClothesMen;