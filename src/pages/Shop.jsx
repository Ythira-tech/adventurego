import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [addingToCart, setAddingToCart] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await api.get('/products');
      setProducts(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId) => {
    setAddingToCart(productId);
    try {
      // In a real app, you would add to cart via API
      await api.post('/cart', { productId, quantity: 1 });
      
      // Update local cart state
      setCart(prev => [...prev, { productId, quantity: 1 }]);
      
      // Show success message (you can add a toast notification here)
      console.log('Added to cart:', productId);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setAddingToCart(null);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-circle"></i>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button className="retry-btn" onClick={fetchProducts}>
          <i className="fas fa-redo"></i> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero-section">
        <div className="shop-hero-overlay">
          <div className="shop-container">
            <div className="shop-hero-content">
              <h1 className="shop-hero-title">AdventureGo Shop</h1>
              <p className="shop-hero-subtitle">Gear Up for Your Next Adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="shop-products-section">
        <div className="shop-container">
          <div className="shop-section-header">
            <h2 className="shop-section-title">Shop Adventure Gear</h2>
            <p className="shop-section-description">Quality equipment and merchandise for your East African adventures</p>
          </div>

          {products.length === 0 ? (
            <div className="no-products">
              <i className="fas fa-box-open"></i>
              <h3>No Products Available</h3>
              <p>Check back soon for new merchandise.</p>
            </div>
          ) : (
            <div className="shop-products-grid">
              {products.map(product => (
                <div className="shop-product-card" key={product.id}>
                  <div className="shop-product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="shop-product-category">{product.category}</span>
                  </div>
                  <div className="shop-product-info">
                    <h3 className="shop-product-name">{product.name}</h3>
                    <div className="shop-product-price">{product.price || '$0.00'}</div>
                    <button 
                      className="shop-add-to-cart" 
                      onClick={() => handleAddToCart(product.id)}
                      disabled={addingToCart === product.id}
                    >
                      {addingToCart === product.id ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Adding...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-shopping-cart"></i> Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Shop Info */}
          <div className="shop-info-grid">
            <div className="shop-info-card">
              <div className="shop-info-icon">🚚</div>
              <h3 className="shop-info-title">Free Shipping</h3>
              <p className="shop-info-text">On orders over $100</p>
            </div>
            <div className="shop-info-card">
              <div className="shop-info-icon">↩️</div>
              <h3 className="shop-info-title">Easy Returns</h3>
              <p className="shop-info-text">30-day return policy</p>
            </div>
            <div className="shop-info-card">
              <div className="shop-info-icon">💳</div>
              <h3 className="shop-info-title">Secure Payment</h3>
              <p className="shop-info-text">100% secure transactions</p>
            </div>
            <div className="shop-info-card">
              <div className="shop-info-icon">📞</div>
              <h3 className="shop-info-title">Customer Support</h3>
              <p className="shop-info-text">24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;