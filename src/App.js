import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/add-product.component';
import ProductList from './components/ProductList/product-list.component';
import Footer from './components/Footer/footer.component';

function App() {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('DVD');
  const [size, setSize] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

  return (
    <Router>
      <div data-test="appComponent" className="container">
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route
            path="/addproduct"
            element={(
              <AddProduct
                sku={sku}
                setSku={setSku}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                type={type}
                setType={setType}
                size={size}
                setSize={setSize}
                weight={weight}
                setWeight={setWeight}
                height={height}
                setHeight={setHeight}
                width={width}
                setWidth={setWidth}
                length={length}
                setLength={setLength}
              />
            )}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
