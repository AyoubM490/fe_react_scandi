import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Products from '../Products';
import AddProduct from '../AddProduct';
import Product from '../Services/Product';
import ProductsApi from '../Services/ProductsApi';
import './app.scss';

function App() {
  const product = new Product();
  const [products, setProducts] = useState(null);
  const [changed, setChanged] = useState(false);

  const loadProducts = () => {
    ProductsApi.all().then((res) => {
      setProducts(res.data);
      setChanged(false);
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <Header
                  headerText="Products List"
                  navText={['ADD', 'MASS DELETE']}
                  onDeleteChecked={async () => {
                    const deleted = await product.delete();
                    if (deleted) loadProducts();
                  }}
                />
                <Products products={products} />
              </>
            )}
          />
          <Route
            exact
            path="/add-product"
            element={(
              <>
                <Header
                  headerText="Products Add"
                  navText={['Save', 'Cancel']}
                  onProductSave={async () => {
                    const saved = await product.save();
                    if (saved) {
                      setChanged(true);
                      loadProducts();
                    }
                  }}
                />
                <AddProduct changed={changed} />
              </>
            )}
          />
        </Routes>
      </Router>
      <h4>Scandiweb Test assignment</h4>
    </div>
  );
}
export default App;
