
const ItemList = ({products}) => {
    return
    <>
    <div>
            {products.map((product) => (
                <Item>key={product.id}{...product}</Item>
            ))} 
      
    </div>
    </>
}
export default ItemList;