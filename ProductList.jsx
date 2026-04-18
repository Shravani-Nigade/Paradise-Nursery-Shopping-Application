import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    image: "https://source.unsplash.com/200x200/?snake-plant"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 10,
    image: "https://source.unsplash.com/200x200/?aloe-vera"
  },
  {
    id: 3,
    name: "Money Plant",
    price: 12,
    image: "https://source.unsplash.com/200x200/?money-plant"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>🌿 Available Plants</h2>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
