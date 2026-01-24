import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Safari Destinations in East Africa',
      excerpt: 'Discover the most breathtaking safari destinations across Kenya, Tanzania, and Uganda. From the Great Migration to rare wildlife sightings.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Safari Guide',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      author: 'Samuel Kariuki',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Essential Packing List for Kilimanjaro Climbs',
      excerpt: 'What to pack for your Mount Kilimanjaro adventure. Our comprehensive guide covers everything from gear to clothing.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Hiking Tips',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      author: 'Amina Hassan',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'Cultural Etiquette: Visiting Maasai Communities',
      excerpt: 'Learn the proper cultural etiquette when visiting Maasai villages. Respect local traditions and make meaningful connections.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Culture',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
      author: 'Joseph Omondi',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'Best Wildlife Photography Spots in Kenya',
      excerpt: 'Capture stunning wildlife photographs at these prime locations. Tips from our professional photography guides.',
      image: 'https://images.unsplash.com/photo-1573843989-c9d7ad3f2001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Photography',
      date: 'Nov 28, 2024',
      readTime: '9 min read',
      author: 'David Njoroge',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Tourism: Our Conservation Efforts',
      excerpt: 'How AdventureGo is leading the way in sustainable tourism and conservation efforts across East Africa.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Conservation',
      date: 'Nov 20, 2024',
      readTime: '5 min read',
      author: 'Peter Odhiambo',
      authorImage: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Bird Watching Hotspots in Tanzania',
      excerpt: 'Discover the best locations for bird watching in Tanzania, home to over 1,000 bird species.',
      image: 'https://images.unsplash.com/photo-1518834103328-93d45986dce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Wildlife',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      author: 'Grace Wambui',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      featured: false
    }
  ];

  // Categories for filtering
  const categories = [
    'All Posts',
    'Safari Guide',
    'Hiking Tips',
    'Culture',
    'Photography',
    'Conservation',
    'Wildlife'
  ];

  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Filter posts by category
  const filteredPosts = activeCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Featured post (first featured post)
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-overlay">
          <div className="blog-container">
            <div className="blog-hero-content">
              <h1 className="blog-hero-title">AdventureGo Blog</h1>
              <p className="blog-hero-subtitle">
                Stories, Tips & Insights from East Africa's Premier Adventure Company
              </p>
              <div className="blog-search-bar">
                <input 
                  type="text" 
                  placeholder="Search articles, destinations, or tips..."
                  className="blog-search-input"
                />
                <button className="blog-search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="blog-featured-section">
          <div className="blog-container">
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-badge">
                  <i className="fas fa-star"></i> Featured
                </div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="post-category">{featuredPost.category}</span>
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="post-read-time">{featuredPost.readTime}</span>
                </div>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-author">
                  <img src={featuredPost.authorImage} alt={featuredPost.author} />
                  <div className="author-info">
                    <span className="author-name">By {featuredPost.author}</span>
                    <span className="author-role">Adventure Guide</span>
                  </div>
                </div>
                <button className="read-article-btn">
                  Read Full Article <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="blog-categories-section">
        <div className="blog-container">
          <div className="categories-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setVisiblePosts(6);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="blog-container">
          <div className="blog-posts-grid">
            {filteredPosts.slice(0, visiblePosts).map(post => (
              <article className="blog-post-card" key={post.id}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-category-tag">{post.category}</div>
                </div>
                <div className="post-content">
                  <div className="post-meta-small">
                    <span className="post-date-small">{post.date}</span>
                    <span className="post-read-time-small">{post.readTime}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-author-small">
                    <img src={post.authorImage} alt={post.author} />
                    <span className="author-name-small">By {post.author}</span>
                  </div>
                </div>
                <button className="read-more-btn">
                  Read More <i className="fas fa-chevron-right"></i>
                </button>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="load-more-container">
              <button 
                className="load-more-btn"
                onClick={() => setVisiblePosts(prev => prev + 3)}
              >
                <i className="fas fa-plus"></i> Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter-section">
        <div className="blog-container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h2 className="newsletter-title">Subscribe to Our Adventure Newsletter</h2>
              <p className="newsletter-description">
                Get weekly updates on new destinations, travel tips, and exclusive offers delivered to your inbox.
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-submit">
                  Subscribe <i className="fas fa-paper-plane"></i>
                </button>
              </form>
              <p className="newsletter-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="newsletter-image">
              <img 
                src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Adventure Newsletter" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;