import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal" },
  { id: 2, name: "Tulsi", price: 12, category: "Medicinal" },
  { id: 3, name: "Rose", price: 15, category: "Flowering" },
  { id: 4, name: "Jasmine", price: 18, category: "Flowering" },
  { id: 5, name: "Money Plant", price: 20, category: "Indoor" },
  { id: 6, name: "Snake Plant", price: 22, category: "Indoor" },
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div>
      <h2>Our Plants 🌿</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          <div className="grid">
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div key={plant.id} className="card">
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>
                  <button onClick={() => dispatch(addToCart(plant))}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
