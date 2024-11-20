import React from "react";
import useGetData from "../../../hooks/useGetData";
import Header from "../../Header";
import renderAll from "../RenderResults";
import Footer from "../../Footer";
import useHandleInputSearchText from "../../../hooks/useHandleInputSearchText";
import SearchBox from "../../SearchBox";

const Jewelery = () => {
    const { searchText, handleInputSearchText } = useHandleInputSearchText();

    const { products, isLoading, error } = useGetData('https://fakestoreapi.com/products/category/jewelery');

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

export default Jewelery;