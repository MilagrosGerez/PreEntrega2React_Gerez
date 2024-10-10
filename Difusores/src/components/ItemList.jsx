import Item from '../components/Item';  
import  Products from '../products';

const ItemList = ({  Products }) => {
  return (
    <>
      <div>
        { Products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
