import React from "react";
import { ArticleProduct, ButtonAddCart, DivDescription, DivLoading, DivProductImage, LabelLoading, ProductDescription, ProductImage, ProductsGrid } from "./styles";

const renderResults = (products) => (
    <ProductsGrid role="grid">
        {
            products.map((product) => {
                const { id, category, description, image, price, title } = product;

                function truncate(str, maxlength) {
                    return (str.length > maxlength) ?
                        str.slice(0, maxlength - 1) + '…' : str;
                }

                return (
                    <ArticleProduct key={id}>
                        <DivProductImage>
                            <ProductImage src={image} alt={`Producto: ${title}`} />
                        </DivProductImage>
                        <DivDescription>
                            <h1>{title}</h1>
                            <ProductDescription>{truncate(description, 80)}</ProductDescription>
                            <p>Categoria: {category}</p>
                            <p>Precio: ${price}</p>
                            <ButtonAddCart>Agregar al Carrito</ButtonAddCart>
                        </DivDescription>

                    </ArticleProduct>
                )
            })
        }
    </ProductsGrid>
)


const renderAll = (isLoading, error, products, searchText) => {
    const articleSearch = searchText.searchText
    const productFilter = products.filter(product => product.title.trim().toLowerCase().indexOf(articleSearch.toLowerCase()) > -1)
    console.log(productFilter);
    if (isLoading) return (
        <DivLoading>
            <LabelLoading>CARGANDO NUESTRO CATALOGO</LabelLoading>
        </DivLoading>
    )
    if (error) return (
        <DivLoading>
            <LabelLoading>SERVICIO EN MANTENIMIENTO</LabelLoading>
        </DivLoading>
    )
    if (articleSearch === "") return renderResults(products)
    if (productFilter == false) return (
        <DivLoading>
            <LabelLoading>NO SE ENCONTRARON PRODUCTOS</LabelLoading>
        </DivLoading>
    )
    return renderResults(productFilter)
}

export default renderAll;