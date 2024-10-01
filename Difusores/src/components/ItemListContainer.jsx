import { useEffect, useState } from 'react';
import { getProducts} from '../products';
import { getProductsByCategory } from '../products';

import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
  const [products , setProducts] = useState([])

  const {categoryId} = useParams
  useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc( categoryId )
    .then(Response => {
        setProducts(Response)
      })
      .catch(Error => {
        console.error('Error:', Error);
        setProducts([]) // reset the state if there is an error to avoid stale data
      }
      )
    }, [categoryId]

    )
        
    

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products ={products}/>
    </div>
  );
};

export default ItemListContainer;
