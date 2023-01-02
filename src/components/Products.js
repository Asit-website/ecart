import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
const Products = () => {
  // jo value mai dalte ho createContext ka vo easly usekar sakte har jagah mai
  // const [products] = useContext(DataContext);
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <>
            <div className="card" key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.images[0]} alt="" />
              </Link>

              <div className="box">
                <h3 title={product.title}>
                  <Link to={`/products/${product._id}`}>{product.title}</Link>
                </h3>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                <button className="cart" onClick={() => addCart(product._id)}>Add to cart</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
