import React from "react";
import { ArticleProduct, DivDescription, DivLoading, LabelLoading, ProductImage, ProductsGrid } from "./styles";

const renderResults = (products) => (
    <ProductsGrid>
        {
            products.map((product) => {
                const { id, category, description, image, price, title } = product;

                function truncate(str, maxlength) {
                    return (str.length > maxlength) ?
                        str.slice(0, maxlength - 1) + '…' : str;
                }
                return (
                    <ArticleProduct key={id}>
                        <div style={{ textAlign: "center" }}>
                            <ProductImage src={image} alt="product-image" />
                        </div>
                        <DivDescription>
                            <label>{title}</label>
                            <p>{truncate(description, 80)}</p>
                            <p>Categoria: {category}</p>
                            <p>Precio: ${price}</p>
                            <button>Agregar al Carrito</button>
                        </DivDescription>

                    </ArticleProduct>
                )
            })
        }
    </ProductsGrid>
)


const renderAll = (isLoading, error, products, searchText) => {
    console.log(searchText.searchText)
    const productFilter = products.filter(product => product.title.trim() === searchText.searchText)
    console.log(productFilter)
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
    if (searchText.searchText === "") return renderResults(products)
    return renderResults(productFilter)
}

export default renderAll;