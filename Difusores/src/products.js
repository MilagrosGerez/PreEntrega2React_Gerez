const Productos = [
    {id: 1, 
     category: 'Dulce',
     name : 'Coco vainilla',
     img: './public/fotoDifusor',
     precio: 5000,
     stock: 10
    },
    {
        id: 2,
        category: 'Florales',
        name : 'Jazmín',
        img: './public/fotoDifusor',
        precio: 5000,
        stock: 10
    },
    {
        id: 3,
        category: 'Dulce',
        name : 'melon sandia',
        img: './public/fotoDifusor2',
        precio: 5000,
        stock: 10
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos);
      }, 3000); // Simular un retraso de 1 segundo
    });
  };
  
  export const getProductsById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = Productos.find((item) => item.id === parseInt(id));
        resolve(item);
      }, 3000);
    });
  };

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      const filteredProducts = Productos.filter(product => product.category === categoryId);
      setTimeout(() => {
        resolve(filteredProducts);
      }, 1000); // Simulando una llamada asíncrona con un retraso
    });
  };