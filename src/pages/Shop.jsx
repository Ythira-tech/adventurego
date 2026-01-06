import React, { useState } from 'react';
import './Shop.css';
import product1 from '../assets/shop/safari-hat.jpg';
import product2 from '../assets/shop/binoculars.jpg';
import product3 from '../assets/shop/camera-gear.jpg';
import product4 from '../assets/shop/hiking-boots.jpg';
import product5 from '../assets/shop/water-bottle.jpg';
import product6 from '../assets/shop/backpack.jpg';
import product7 from '../assets/shop/safari-shirt.jpg';
import product8 from '../assets/shop/survival-kit.jpg';

const Shop = () => {
  const [cartCount, setCartCount] = useState(3);
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Safari Adventure Hat',
      category: 'clothing',
      price: 45.99,
      rating: 4.8,
      reviews: 127,
      image: product1,
      bestseller: true,
      description: 'Waterproof, UV-protected hat with mosquito net'
    },
    {
      id: 2,
      name: 'Professional Binoculars',
      category: 'gear',
      price: 189.99,
      rating: 4.9,
      reviews: 89,
      image: product2,
      bestseller: true,
      description: '10x42 magnification with night vision'
    },
    {
      id: 3,
      name: 'Wildlife Camera Kit',
      category: 'electronics',
      price: 349.99,
      rating: 4.7,
      reviews: 56,
      image: product3,
      bestseller: false,
      description: 'Complete DSLR kit with telephoto lens'
    },
    {
      id: 4,
      name: 'Premium Hiking Boots',
      category: 'footwear',
      price: 129.99,
      rating: 4.6,
      reviews: 203,
      image: product4,
      bestseller: true,
      description: 'Waterproof leather boots with ankle support'
    },
    {
      id: 5,
      name: 'Insulated Water Bottle',
      category: 'accessories',
      price: 29.99,
      rating: 4.5,
      reviews: 178,
      image: product5,
      bestseller: false,
      description: '2L capacity, keeps cold for 24 hours'
    },
    {
      id: 6,
      name: 'Tactical Adventure Backpack',
      category: 'gear',
      price: 89.99,
      rating: 4.8,
      reviews: 92,
      image: product6,
      bestseller: true,
      description: '40L waterproof backpack with compartments'
    },
    {
      id: 7,
      name: 'Safari Performance Shirt',
      category: 'clothing',
      price: 39.99,
      rating: 4.4,
      reviews: 67,
      image: product7,
      bestseller: false,
      description: 'Quick-dry, insect-repellent fabric'
    },
    {
      id: 8,
      name: 'Emergency Survival Kit',
      category: 'safety',
      price: 59.99,
      rating: 4.9,
      reviews: 41,
      image: product8,
      bestseller: true,
      description: 'Compact kit with first aid and tools'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'clothing', name: 'Clothing', count: 12 },
    { id: 'gear', name: 'Adventure Gear', count: 18 },
    { id: 'electronics', name: 'Electronics', count: 8 },
    { id: 'footwear', name: 'Footwear', count: 6 },
    { id: 'accessories', name: 'Accessories', count: 10 },
    { id: 'safety', name: 'Safety Equipment', count: 4 }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (productId) => {
    setCartCount(prev => prev + 1);
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Gear Up for Your <span className="highlight">Adventure</span></h1>
            <p>Premium equipment and apparel for every explorer. Curated by our adventure experts.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">48</span>
                <span className="label">Premium Products</span>
              </div>
              <div className="stat">
                <span className="number">4.8</span>
                <span className="label">Avg. Rating</span>
              </div>
              <div className="stat">
                <span className="number">24/7</span>
                <span className="label">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="shop-categories">
        <div className="container">
          <div className="categories-header">
            <h2>Shop by <span className="highlight">Category</span></h2>
            <p>Find exactly what you need for your adventure</p>
          </div>
          
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count} items</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h3>{activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}</h3>
            <div className="cart-info">
              <button className="cart-btn">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{cartCount}</span>
              </button>
              <span className="cart-text">Items in cart</span>
            </div>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                {product.bestseller && <span className="bestseller-badge">Bestseller</span>}
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <button className="quick-view">Quick View</button>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}></i>
                      ))}
                    </div>
                    <span className="rating-text">{product.rating} ({product.reviews})</span>
                  </div>
                  <h4>{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price">${product.price.toFixed(2)}</span>
                      <span className="shipping">Free Shipping</span>
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product.id)}
                    >
                      <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="featured-collection">
        <div className="container">
          <div className="collection-content">
            <div className="collection-text">
              <h2>AdventureGo <span className="highlight">Premium</span> Collection</h2>
              <p>Expert-tested gear that withstands the toughest conditions. Every product comes with our Adventure Guarantee.</p>
              <div className="collection-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>30-Day Return Policy</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>2-Year Warranty</span>
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  <span>Free Shipping Worldwide</span>
                </div>
              </div>
              <button className="collection-btn">View Collection</button>
            </div>
            <div className="collection-image">
              <img src={product2} alt="Premium Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="shop-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Get 15% Off Your First Order</h2>
            <p>Subscribe to our newsletter for exclusive deals and adventure tips</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <p className="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;