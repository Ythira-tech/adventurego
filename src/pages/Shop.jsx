import React from 'react';
import './Shop.css';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'AdventureGo T-Shirt',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Apparel'
    },
    {
      id: 2,
      name: 'Safari Hat',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Travel Water Bottle',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Essentials'
    },
    {
      id: 4,
      name: 'Wildlife Guide Book',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Books'
    },
    {
      id: 5,
      name: 'Adventure Backpack',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Gear'
    },
    {
      id: 6,
      name: 'Binoculars',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Equipment'
    }
  ];

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>AdventureGo Shop</h1>
              <p className="hero-subtitle">Gear Up for Your Next Adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop Adventure Gear</h2>
            <p>Quality equipment and merchandise for your East African adventures</p>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          {/* Shop Info */}
          <div className="shop-info">
            <div className="info-card">
              <div className="info-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </div>
            <div className="info-card">
              <div className="info-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
            <div className="info-card">
              <div className="info-icon">💳</div>
              <h3>Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Customer Support</h3>
              <p>24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;