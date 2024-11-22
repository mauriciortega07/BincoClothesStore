import styled from "styled-components";

const DivLoading = styled.div`
    color: white;
    background-color: #000000;
    align-items: center;
    display: flex;
    width: 100%;
    height: 50vw;
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
const DivProductImage = styled.div`
    align-content: center;
    text-align: center;
    height: 27vw;
`

const ProductImage = styled.img`
    width: 17vw;
    padding: 1vw;
    box-sizing: border-box;
    transition: all .20s ease-in;
    cursor: pointer;

    &:hover {
    transform: scale(1.05)
    }
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

const ProductDescription = styled.p`
    font-weight: 300;
    font-size: 14px;

`

const ButtonAddCart = styled.button`
    height: 3vw;
    width: 12.2vw;
    font-family: Kanit, arial, helvetica;
    border: none;
    border-radius: 10px;
    background-color: #eaf193;
    transition: all .25s ease-in;
    cursor:pointer;

    &:hover {
        background-color: #a1e4fa;
        transform: scale(1.05)
    }

`

export {
    DivLoading,
    LabelLoading,
    ProductsGrid,
    DivProductImage,
    ProductImage,
    ArticleProduct,
    ProductDescription,
    DivDescription,
    ButtonAddCart

}