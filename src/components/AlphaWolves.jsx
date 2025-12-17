import React from 'react';
import './AlphaWolves.css';

const AlphaWolves = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Samuel Kariuki',
      role: 'Head Safari Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Amina Hassan',
      role: 'Mountain Expedition',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Joseph Omondi',
      role: 'Cultural Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Lydia Chebet',
      role: 'Safety Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'David Njoroge',
      role: 'Photographer Guide',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Grace Wambui',
      role: 'Bird Specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Peter Odhiambo',
      role: 'Conservation Officer',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Sarah Mwangi',
      role: 'Luxury Coordinator',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section className="alpha-wolves">
      <div className="container">
        {/* Section Header */}
        <div className="wolves-header">
          <h6 className="section-subtitle">Meet The Pack</h6>
          <h2 className="section-title">
            Our <span className="highlight">Alpha Wolves</span>
          </h2>
          <p className="section-description">
            The exceptional guides who transform trips into life-changing adventures.
          </p>
        </div>

        {/* Single Row of Circular Photos */}
        <div className="team-row">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              {/* Circular Photo */}
              <div className="member-circle">
                <img src={member.image} alt={member.name} />
                <div className="circle-ring"></div>
              </div>

              {/* Name & Role */}
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>

              {/* Social Media Icons */}
              <div className="member-social">
                <a href="#" className="social-icon" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
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