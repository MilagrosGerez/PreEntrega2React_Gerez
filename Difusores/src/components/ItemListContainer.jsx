import { useEffect, useState } from 'react';
import {getProducts, getProductsByCategory} from '../products';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

const ItemListContainer = ({greeting}) => {
  const [products , setProducts] = useState([]);

  const {categoryId} = useParams();


  useEffect( () => {
    if (categoryId) {
      getProductsByCategory(categoryId)
       .then((filteredProducts) => {
        setProducts(filteredProducts);
       });
    } else{
      getProducts()
      .then(data => setProducts(data))
    };
  }, [categoryId]

    );
        
    

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products ={products}/>
    </div>
  );
};

export default ItemListContainer;
