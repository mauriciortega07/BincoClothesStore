import styled from "styled-components";

const DivLoading = styled.div`
    color: white;
    background-color: #000000;
    align-items: center;
    display: flex;
    width: 100%;
    height: 35vw;
    justify-content: center;
`
const LabelLoading = styled.label`
padding: 30vw;
`

const ProductsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    margin: 1vw;
    margin-top: 2vw;
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
`

const ProductImage = styled.img`
    width: 17vw;
    padding: 1vw;
    box-sizing: border-box;
`

const ArticleProduct = styled.article`
    padding: 1vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #a7ee2c;
    border-radius: 1.4vw;
    box-shadow: 1px 1px 1px 1px rgba(32, 32, 32, 0.3);
`

const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    align-items: center;
    text-align: center;
`

export {
    DivLoading,
    LabelLoading,
    ProductsGrid,
    ProductImage,
    ArticleProduct,
    DivDescription

}