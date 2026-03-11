import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState(null);

  // Fetch blog posts from backend
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await api.get('/blog');
      setPosts(data);
      // Set the first post as featured (or you can have a specific featured post)
      if (data.length > 0) {
        setFeaturedPost(data[0]);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sample data in case API returns empty
  const samplePosts = [
    {
      id: 1,
      title: "Conquering Kilimanjaro: A Journey to the Roof of Africa",
      excerpt: "Follow our team's incredible journey to the summit of Africa's highest peak, overcoming challenges and witnessing breathtaking views.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hiking",
      date: "March 15, 2025",
      readTime: "8 min read",
      author: "Sarah Kimani"
    },
    {
      id: 2,
      title: "The Great Migration: Witnessing Nature's Greatest Spectacle",
      excerpt: "Experience the thrill of watching millions of wildebeest cross the Mara River in this once-in-a-lifetime wildlife encounter.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wildlife",
      date: "February 28, 2025",
      readTime: "6 min read",
      author: "David Omondi"
    },
    {
      id: 3,
      title: "Maasai Culture: A Window into Kenya's Rich Heritage",
      excerpt: "Discover the traditions, customs, and vibrant culture of the Maasai people through the eyes of our cultural guides.",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Culture",
      date: "February 10, 2025",
      readTime: "5 min read",
      author: "Joseph ole Tepes"
    },
    {
      id: 4,
      title: "Bird Watching Paradise: 500 Species in Kakamega Forest",
      excerpt: "Explore Kenya's only tropical rainforest and discover the incredible diversity of birdlife that calls this forest home.",
      image: "https://images.unsplash.com/photo-1518834103328-93d45986dce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Nature",
      date: "January 22, 2025",
      readTime: "7 min read",
      author: "Grace Wambui"
    },
    {
      id: 5,
      title: "Sustainable Tourism: How We're Protecting East Africa's Wildlife",
      excerpt: "Learn about our conservation efforts and how we're working with local communities to ensure wildlife thrives for generations.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conservation",
      date: "January 5, 2025",
      readTime: "6 min read",
      author: "Peter Odhiambo"
    }
  ];

  // Use sample data if API returns empty
  const displayPosts = posts.length > 0 ? posts : samplePosts;
  const displayFeatured = featuredPost || displayPosts[0];

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading stories...</p>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-overlay">
          <div className="blog-container">
            <h1 className="blog-hero-title">Adventure Stories</h1>
            <p className="blog-hero-subtitle">
              Tales from the wild, insights from the trail, and stories from our adventures across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-section">
        <div className="blog-container">
          <h2 className="section-title">Latest <span>Adventures</span></h2>
          
          <div className="stories-grid">
            {displayPosts.map((post, index) => (
              <article key={post.id} className={`story-card story-${index + 1}`}>
                <div className="story-image">
                  <img src={post.image} alt={post.title} />
                  <div className="story-category">{post.category}</div>
                </div>
                <div className="story-content">
                  <div className="story-meta">
                    <span className="story-date">
                      <i className="far fa-calendar"></i> {post.date}
                    </span>
                    <span className="story-read-time">
                      <i className="far fa-clock"></i> {post.readTime}
                    </span>
                  </div>
                  <h3 className="story-title">{post.title}</h3>
                  <p className="story-excerpt">{post.excerpt}</p>
                  <div className="story-footer">
                    <div className="story-author">
                      <i className="fas fa-user-circle"></i>
                      <span>By {post.author}</span>
                    </div>
                    <button className="read-story-btn">
                      Read Full Story <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;