import React, { useState } from "react";
import useGetData from "../../../hooks/useGetData";
import Header from "../../Header/index";
import renderAll from "../RenderResults";
import Footer from "../../Footer";
import useHandleInputSearchText from "../../../hooks/useHandleInputSearchText";
import SearchBox from "../../SearchBox";

const ProductsAll = () => {

    const {searchText, handleInputSearchText} = useHandleInputSearchText();

    const { products, isLoading, error } = useGetData("https://fakestoreapi.com/products");

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

export default ProductsAll;