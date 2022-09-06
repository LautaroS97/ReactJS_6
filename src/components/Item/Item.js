import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <div>
            <img src={producto.img}/>
            <h3>{producto.nombre}</h3>
            <p>Precio: AR$ {producto.precio}</p>
            <h4>Existencias: {producto.stock}</h4>
            <p>Descripción: {producto.desc}</p>
            <Link to={`/item/${producto.id}`}>Ver detalles...</Link>
        </div>
    )
}

export default Item;