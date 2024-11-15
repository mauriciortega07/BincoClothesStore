import React from "react";
import useGetData from "../../../hooks/useGetData";
import Header from "../../Header";
import renderAll from "../RenderResults";
import Footer from "../../Footer";
import useHandleInputSearchText from "../../../hooks/useHandleInputSearchText";
import SearchBox from "../../SearchBox";

const Electronics = () => {

    const {searchText, handleInputSearchText} = useHandleInputSearchText();

    const { isLoading, error, products } = useGetData("https://fakestoreapi.com/products/category/electronics");

    return (
        <>
            <Header/>
            <SearchBox searchText={searchText.searchText} functionInput = {handleInputSearchText}/>
            <main>
                {renderAll(isLoading, error, products,searchText)}
            </main>
            <Footer />
        </>
    )
}

export default Electronics;