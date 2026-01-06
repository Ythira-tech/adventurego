import React, { useState } from 'react';
import './Blog.css';
import blog1 from '../assets/blog/migration.jpg';
import blog2 from '../assets/blog/kilimanjaro.jpg';
import blog3 from '../assets/blog/culture.jpg';
import blog4 from '../assets/blog/conservation.jpg';
import blog5 from '../assets/blog/beach.jpg';
import blog6 from '../assets/blog/wildlife.jpg';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Great Migration: A Photographer\'s Guide',
      excerpt: 'Learn how to capture stunning images of the annual wildebeest migration in the Serengeti.',
      author: 'John Wildlife',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'wildlife',
      image: blog1,
      featured: true,
      likes: 245,
      comments: 32
    },
    {
      id: 2,
      title: 'Conquering Kilimanjaro: Training and Preparation',
      excerpt: 'Everything you need to know to successfully summit Africa\'s highest peak.',
      author: 'Sarah Climber',
      date: 'March 10, 2024',
      readTime: '12 min read',
      category: 'adventure',
      image: blog2,
      featured: true,
      likes: 189,
      comments: 28
    },
    {
      id: 3,
      title: 'Maasai Culture: Traditions in Modern Times',
      excerpt: 'An in-depth look at Maasai traditions and how they\'re preserved today.',
      author: 'David Anthropologist',
      date: 'March 5, 2024',
      readTime: '10 min read',
      category: 'culture',
      image: blog3,
      featured: false,
      likes: 156,
      comments: 19
    },
    {
      id: 4,
      title: 'Conservation Efforts in East Africa',
      excerpt: 'How local communities are protecting endangered species and habitats.',
      author: 'Lisa Conservationist',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'conservation',
      image: blog4,
      featured: false,
      likes: 203,
      comments: 41
    },
    {
      id: 5,
      title: 'Hidden Beaches of Zanzibar',
      excerpt: 'Discover the most beautiful and secluded beaches on the Spice Island.',
      author: 'Mark Traveler',
      date: 'February 22, 2024',
      readTime: '6 min read',
      category: 'travel',
      image: blog5,
      featured: false,
      likes: 178,
      comments: 25
    },
    {
      id: 6,
      title: 'Bird Watching in Kenya\'s Rift Valley',
      excerpt: 'A guide to the best birding spots and rare species to look for.',
      author: 'Emma Ornithologist',
      date: 'February 18, 2024',
      readTime: '9 min read',
      category: 'wildlife',
      image: blog6,
      featured: false,
      likes: 132,
      comments: 17
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'wildlife', name: 'Wildlife', count: 8 },
    { id: 'adventure', name: 'Adventure', count: 6 },
    { id: 'culture', name: 'Culture', count: 5 },
    { id: 'travel', name: 'Travel Tips', count: 7 },
    { id: 'conservation', name: 'Conservation', count: 4 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = [...blogPosts].slice(0, 4);
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Adventure <span className="highlight">Stories</span> & Guides</h1>
            <p>Expert insights, travel tips, and inspiring stories from across East Africa</p>
            <div className="search-box">
              <input type="text" placeholder="Search articles, guides, destinations..." />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="highlight">Stories</span></h2>
            <p>Most popular and trending articles</p>
          </div>
          
          <div className="featured-grid">
            {featuredPosts.map(post => (
              <div key={post.id} className="featured-post">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="post-category">{post.category}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="author"><i className="fas fa-user"></i> {post.author}</span>
                    <span className="date"><i className="far fa-calendar"></i> {post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <div className="read-time">
                      <i className="far fa-clock"></i> {post.readTime}
                    </div>
                    <div className="post-actions">
                      <button className="like-btn">
                        <i className="far fa-heart"></i> {post.likes}
                      </button>
                      <button className="comment-btn">
                        <i className="far fa-comment"></i> {post.comments}
                      </button>
                      <button className="read-btn">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="blog-main">
        <div className="container">
          <div className="blog-layout">
            {/* Categories Sidebar */}
            <div className="sidebar">
              <div className="categories-sidebar">
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="sidebar-newsletter">
                <h3>Subscribe to Our Blog</h3>
                <p>Get the latest adventure stories and travel tips delivered to your inbox</p>
                <div className="sidebar-form">
                  <input type="email" placeholder="Your email address" />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="popular-tags">
                <h3>Popular Tags</h3>
                <div className="tags">
                  {['Safari', 'Hiking', 'Wildlife', 'Culture', 'Photography', 'Conservation', 'Mountains', 'Beaches'].map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="posts-grid">
              <div className="grid-header">
                <h3>Latest Articles</h3>
                <div className="sort-options">
                  <span>Sort by:</span>
                  <select>
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Trending</option>
                  </select>
                </div>
              </div>
              
              <div className="posts-container">
                {filteredPosts.map(post => (
                  <article key={post.id} className="blog-post">
                    <div className="post-thumbnail">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="post-details">
                      <div className="post-category-tag">{post.category}</div>
                      <h4>{post.title}</h4>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-meta-info">
                        <span className="author-info">
                          <i className="fas fa-user-circle"></i> {post.author}
                        </span>
                        <span className="post-date">
                          <i className="far fa-calendar"></i> {post.date}
                        </span>
                        <span className="post-read">
                          <i className="far fa-clock"></i> {post.readTime}
                        </span>
                      </div>
                      <button className="read-article-btn">Read Article →</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="recent-posts">
        <div className="container">
          <div className="section-header">
            <h2>Recent <span className="highlight">Updates</span></h2>
            <p>Fresh content from our adventure community</p>
          </div>
          
          <div className="recent-grid">
            {recentPosts.map(post => (
              <div key={post.id} className="recent-post">
                <div className="recent-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="recent-content">
                  <div className="recent-meta">
                    <span className="recent-category">{post.category}</span>
                    <span className="recent-date">{post.date}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <div className="recent-stats">
                    <span><i className="far fa-heart"></i> {post.likes}</span>
                    <span><i className="far fa-comment"></i> {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Share Your Adventure Story</h2>
            <p>Become a contributor and share your experiences with our community of adventurers</p>
            <button className="cta-btn">Submit Your Story</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;