import React, { useEffect, useState } from 'react';
import Product from './Product.component';

const Products = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    async function fetchDVDs() {
      let dvds = await fetch(
        'https://ayoub-chahir-scandi-api.herokuapp.com/api/dvd/read.php',
      );
      dvds = await dvds.json();
      dvds = dvds.data;

      return dvds;
    }

    async function fetchBooks() {
      let books = await fetch(
        'https://ayoub-chahir-scandi-api.herokuapp.com/api/book/read.php',
      );
      books = await books.json();
      books = books.data;

      return books;
    }

    async function fetchFurnitures() {
      let furnitures = await fetch(
        'https://ayoub-chahir-scandi-api.herokuapp.com/api/furniture/read.php',
      );
      furnitures = await furnitures.json();
      furnitures = furnitures.records;

      return furnitures;
    }

    async function fetchData() {
      const dvds = await fetchDVDs();
      const books = await fetchBooks();
      const furnitures = await fetchFurnitures();

      let products = dvds.concat(books).concat(furnitures);
      return products;
    }

    let res = fetchData();
    res.then((products) => {
      setProductsArr(products);
    });
  }, []);

  const Products = productsArr.map((product) => (
    <Product
      key={product.id}
      sku={product.sku}
      name={product.name}
      price={product.price}
      size={product.size}
      weight={product.weight}
      height={product.height}
      width={product.width}
      length={product.length}
    />
  ));

  return Products;
};

export default Products;
