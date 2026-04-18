import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice"; // ✅ matches updated slice

// 🌿 Plant Data with Categories
const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1587502537745-84a0d91a5e0b",
  },
  {
    id: 2,
    name: "Tulsi",
    price: 12,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
  },
  {
    id: 3,
    name: "Rose",
    price: 15,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 4,
    name: "Jasmine",
    price: 18,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
  },
  {
    id: 5,
    name: "Money Plant",
    price: 20,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594851170-7c6c78b4b3b0",
  },
  {
    id: 6,
    name: "Snake Plant",
    price: 22,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1616627452316-2a1c6c7d3a1e",
  },
];

// 🌿 Component
function ProductList() {
  const dispatch = useDispatch();

  // ✅ Extract unique categories
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="product-container">
      <h2>🌿 Explore Our Plants</h2>

      {/* ✅ Loop through categories */}
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>

          <div className="grid">
            {/* ✅ Filter plants by category */}
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="card">
                  
                  {/* 🌿 Image */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-img"
                  />

                  {/* 🌿 Details */}
                  <h4>{plant.name}</h4>
                  <p>Price: ₹{plant.price}</p>

                  {/* ✅ Add to Cart Button */}
                  <button
                    onClick={() => dispatch(addItem(plant))}
                  >
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
