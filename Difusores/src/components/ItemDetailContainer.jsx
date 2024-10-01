import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductsByID} from '../products';
import Item from '../components/Item';

const ItemDetailContainer = () => {
  const [product , setProduct] = useState(null)

  const {itemId } = useParams()

  useEffect(() => {
    getProductsByID(itemId)
    .then(Response => {
        setProduct(Response)
  
    })
    .catch(error => console.error( error));
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
        <Item {...product}/>
    </div>
  );
};

export default ItemDetailContainer;
