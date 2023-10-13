import  { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([
    {
        laces: 'brown',
        mesh: 'grey',
        caps: 'brown',
        inner: 'white',
        sole: 'white',
        stripes: 'brown',
        band: 'brown',
        patch: 'white',
      },
      {
        laces: 'white',
        mesh: 'black',
        caps: 'white',
        inner: 'white',
        sole: 'white',
        stripes: 'white',
        band: 'white',
        patch: 'grey',
      }
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
