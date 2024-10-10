import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductsById} from '../products';
import Item from '../components/Item';

const ItemDetailContainer = () => {
  const [product , setProduct] = useState(null);

  const {itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
    .then(response => {
        setProduct(response);
  
    })
    .catch(error => console.error( error));
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
         {product ? <Item {...product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
