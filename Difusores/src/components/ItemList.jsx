import Item from '../components/Item';  
import Productos from '../products';

const ItemList = ({ Productos }) => {
  return (
    <>
      <div>
        {Productos.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
