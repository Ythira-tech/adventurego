import React from 'react';
import './AlphaWolves.css';

// Import all images from your assets folder
import samuelImage from '../assets/guides/Alpha-1.jpeg';
import aminaImage from '../assets/guides/Alpha-2.jpeg';
import josephImage from '../assets/guides/Alpha-3.jpeg';
import lydiaImage from '../assets/guides/Alpha-4.jpeg';
import davidImage from '../assets/guides/Alpha-5.jpeg';
import graceImage from '../assets/guides/Alpha-6.jpeg';
import peterImage from '../assets/guides/Alpha-7.jpeg';

const AlphaWolves = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Michael Mwaniki',
      role: 'Guide/Logistics/Photographer',
      image: samuelImage, // Using imported image
    },
    {
      id: 2,
      name: 'Amina Hassan',
      role: 'Mountain Expedition',
      image: aminaImage,
    },
    {
      id: 3,
      name: 'Brighton Mwazangu',
      role: 'Guide/Logistics',
      image: josephImage,
    },
    {
      id: 4,
      name: 'Lydia Chebet',
      role: 'Safety Specialist',
      image: lydiaImage,
    },
    {
      id: 5,
      name: 'David Njoroge',
      role: 'Photographer Guide',
      image: davidImage,
    },
    {
      id: 6,
      name: 'Brian Moses',
      role: 'Guide/Photographer/Sound',
      image: graceImage,
    },
    {
      id: 7,
      name: 'Anne Wambugu',
      role: 'Photographer',
      image: peterImage,
    },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlphaWolves;