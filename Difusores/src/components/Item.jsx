import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return (
       
        <section>
            <div className="item">
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
                <Link to={`/item/${id}`} className="option">Ver detalles</Link>
            </div>

        </section>
    )
}

export default Item;