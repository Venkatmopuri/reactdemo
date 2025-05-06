import React, { useState } from 'react';

const ModuleButton = ({ label, icon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    height: '45px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1.2',
    letterSpacing: '-0.2px',
    margin: '3px',
    border: '01px solid #d3d3d3',
    borderRadius: '70px',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 2px 4px rgba(218, 215, 215, 0.1)',
    whiteSpace: 'nowrap',
    transition: 'transform 0.2s ease-in-out',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
  };

  const iconStyle = {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <span style={iconStyle}>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default ModuleButton;
