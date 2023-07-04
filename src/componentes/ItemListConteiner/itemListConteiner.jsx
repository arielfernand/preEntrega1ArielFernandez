import './itemListConteiner.scss'

const ItemListConteiner = ({saludo}) =>{

    return (
        <div className="catalogo_contenedor">
            <h2>Item List Conteiner</h2>
            <hr />

            <p> {saludo} </p>
        </div>
    )

}

export default ItemListConteiner