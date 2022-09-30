import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/add-product.component';
import ProductList from './components/ProductList/product-list.component';
import Footer from './components/Footer/footer.component';

function App() {
  return (
    <Router>
      <div data-test="appComponent" className="container">
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
