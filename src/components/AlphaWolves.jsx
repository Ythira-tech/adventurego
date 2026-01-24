import React from 'react';
import './AlphaWolves.css';

const AlphaWolves = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Samuel Kariuki',
      role: 'Head Safari Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 2,
      name: 'Amina Hassan',
      role: 'Mountain Expedition',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 3,
      name: 'Joseph Omondi',
      role: 'Cultural Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 4,
      name: 'Lydia Chebet',
      role: 'Safety Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 5,
      name: 'David Njoroge',
      role: 'Photographer Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 6,
      name: 'Grace Wambui',
      role: 'Bird Specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 7,
      name: 'Peter Odhiambo',
      role: 'Conservation Officer',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    {
      id: 8,
      name: 'Sarah Mwangi',
      role: 'Luxury Coordinator',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  ];

  return (
    <section className="alpha-wolves">
      <div className="alpha-wolves-container">
        {/* Section Header */}
        <div className="alpha-wolves-header">
          <h6 className="alpha-wolves-subtitle">Meet The Pack</h6>
          <h2 className="alpha-wolves-title">
            Our <span className="alpha-wolves-highlight">Alpha Wolves</span>
          </h2>
          <p className="alpha-wolves-description">
            The exceptional guides who transform trips into life-changing adventures.
          </p>
        </div>

        {/* Single Row of Circular Photos */}
        <div className="alpha-wolves-row">
          {teamMembers.map((member) => (
            <div className="alpha-wolves-member" key={member.id}>
              {/* Circular Photo */}
              <div className="alpha-wolves-photo-circle">
                <img src={member.image} alt={member.name} />
              </div>

              {/* Name & Role */}
              <div className="alpha-wolves-member-info">
                <h3 className="alpha-wolves-member-name">{member.name}</h3>
                <p className="alpha-wolves-member-role">{member.role}</p>
              </div>

              {/* Social Media Icons - NOW ACTIVE WITH LINKS */}
              <div className="alpha-wolves-social-icons">
                <a 
                  href={member.twitter} 
                  className="alpha-wolves-social-icon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Follow ${member.name} on Twitter`}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href={member.instagram} 
                  className="alpha-wolves-social-icon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Follow ${member.name} on Instagram`}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href={member.facebook} 
                  className="alpha-wolves-social-icon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Follow ${member.name} on Facebook`}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlphaWolves;