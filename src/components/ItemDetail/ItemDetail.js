const ItemDetail = ({item}) => {

    return(
        <div className="container-detail">
            <img src={item.img}/>
            <h2>{item.nombre}</h2>
            <h3>{item.precio}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
        </div>
    )
}

export default ItemDetail;