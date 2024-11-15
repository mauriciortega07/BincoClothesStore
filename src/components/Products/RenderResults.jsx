import React from "react";

const renderResults = (products) => (
        <section>
            {
                products.map((product) => {
                    const { id, category, description, image, price, title } = product;
                    return (
                        <article key={id}>
                            <div>
                                <img src={image} />
                            </div>
                            <div>
                                <label>{title}</label>
                                <p>{description}</p>
                                <p>Categoria: {category}</p>
                                <p>Precio: ${price}</p>
                            </div>

                        </article>
                    )
                })
            }
        </section>
)


const renderAll = (isLoading, error, products, searchText) => {
    console.log(searchText.searchText)
    const productFilter = products.filter(product => product.title.toLowerCase() === searchText.searchText)
    console.log(productFilter)
    if (isLoading) return <label>CARGANDO NUESTRO CATALOGO</label>
    if (error) return <label>SERVICIO EN MANTENIMIENTO</label>
    if(searchText.searchText === "") return renderResults(products)
    return renderResults(productFilter)
}

export default renderAll;