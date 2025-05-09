import React from 'react';
import { IoIosSearch } from "react-icons/io";
import logo from '../Images/Sri Chaitanya logo.png'; 
import studentLogo from '../Images/STUDENT.png';
import Belllogo from '../Images/Bell.png';
import chevronDown from '../Images/chevron-down.png';

const Topbar = () => {
  const topbarStyle = {
    width: '100%',
    height: '4.875rem', // 78px = 4.875rem
    borderBottom: '1px solid #ccc',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    zIndex: 1000,
    padding: '0 1rem', // 16px = 1rem
    boxSizing: 'border-box',
  };

  const leftContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap:'120px',
    width:'100%'
  };

  const logoStyle = {
    height: '2.375rem', // 30px = 1.875rem
    width: 'auto',
    marginRight: '0.625rem', // 10px = 0.625rem
  };

  const searchContainerStyle = {
    position: 'relative',
    maxWidth: '25rem', // 400px = 25rem
    width: '90%',
    height: '2.5rem', // 40px = 2.5rem
    borderRadius: '1.625rem', // 26px = 1.625rem
    background: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
  };

  const searchBarStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none', 
    fontSize: '1rem', // 16px = 1rem
    borderRadius: '1.875rem', // 30px = 1.875rem
    background: 'transparent',
    paddingLeft: '2.25rem', // 36px = 2.25rem to account for icon
    maxWidth:'70000px',
  };

  const searchIconStyle = {
    position: 'absolute',
    width: '1.25rem', // 20px = 1.25rem
    height: '1.25rem', // 20px = 1.25rem
    top: '50%',
    left: '0.6875rem', // 11px = 0.6875rem
    transform: 'translateY(-50%)',
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem', // 16px = 1rem
    width: 'auto',
  };

  const bellStyle = {
    height: '1.5625rem', // 25px = 1.5625rem
    width: '1.5625rem',
  };

  const imgStyle = {
    height: '2.25rem', // 36px = 2.25rem
    width: '2.25rem',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const textInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem', // 8px = 0.5rem
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const textBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.1',
  };

  return (
    <>
      <style>
        {`
          .topbar {
            transition: all 0.3s ease;
          }

          /* Medium screens (1024px and below) */
          @media screen and (max-width: 64rem) { /* 1024px = 64rem */
            .topbar {
              padding: 0 0.75rem; /* 12px = 0.75rem */
              height: 4.375rem; /* 70px = 4.375rem */
            }

            .topbar-logo {
              height: 1.75rem; /* 28px = 1.75rem */
              margin-right: 0.5rem; /* 8px = 0.5rem */
            }

            .search-container {
              max-width: 18.75rem; /* 300px = 18.75rem */
              width: 85%;
              height: 2.25rem; /* 36px = 2.25rem */
              border-radius: 1.5rem; /* 24px = 1.5rem */
              padding-left: 2rem; /* 32px = 2rem */
            }

            .search-icon {
              width: 1.125rem; /* 18px = 1.125rem */
              height: 1.125rem;
              left: 0.625rem; /* 10px = 0.625rem */
            }

            .search-bar {
              font-size: 0.875rem; /* 14px = 0.875rem */
              padding-left: 2rem; /* 32px = 2rem */
            }

            .user-info {
              gap: 0.75rem; /* 12px = 0.75rem */
            }

            .bell-icon {
              height: 1.375rem; /* 22px = 1.375rem */
              width: 1.375rem;
            }

            .user-img {
              height: 2rem; /* 32px = 2rem */
              width: 2rem;
            }

            .text-info {
              gap: 0.375rem; /* 6px = 0.375rem */
            }

            .text-block span {
              font-size: 0.75rem; /* 12px = 0.75rem */
            }

            .text-block p {
              font-size: 0.6875rem; /* 11px = 0.6875rem */
            }

            .chevron {
              width: 1.125rem; /* 18px = 1.125rem */
              height: 1.125rem;
            }
          }

          /* Tablet screens (720px and below) */
          @media screen and (max-width: 45rem) { /* 720px = 45rem */
            .topbar {
              padding: 0 0.625rem; /* 10px = 0.625rem */
              height: 3.75rem; /* 60px = 3.75rem */
            }

            .topbar-logo {
              height: 1.5625rem; /* 25px = 1.5625rem */
              margin-right: 0.375rem; /* 6px = 0.375rem */
            }

            .search-container {
              max-width: 12.5rem; /* 200px = 12.5rem */
              width: 80%;
              height: 2rem; /* 32px = 2rem */
              border-radius: 1.375rem; /* 22px = 1.375rem */
              padding-left: 1.875rem; /* 30px = 1.875rem */
            }

            .search-icon {
              width: 1rem; /* 16px = 1rem */
              height: 1rem;
              left: 0.5625rem; /* 9px = 0.5625rem */
            }

            .search-bar {
              font-size: 0.8125rem; /* 13px = 0.8125rem */
              padding-left: 1.875rem; /* 30px = 1.875rem */
            }

            .user-info {
              gap: 0.5rem; /* 8px = 0.5rem */
            }

            .bell-icon {
              height: 1.25rem; /* 20px = 1.25rem */
              width: 1.25rem;
            }

            .user-img {
              height: 1.75rem; /* 28px = 1.75rem */
              width: 1.75rem;
            }

            .text-info {
              gap: 0.3125rem; /* 5px = 0.3125rem */
            }

            .text-block span {
              font-size: 0.6875rem; /* 11px = 0.6875rem */
            }

            .text-block p {
              font-size: 0.625rem; /* 10px = 0.625rem */
            }

            .chevron {
              width: 1rem; /* 16px = 1rem */
              height: 1rem;
            }
          }

          /* Mobile screens (375px and below) */
          @media screen and (max-width: 23.4375rem) { /* 375px = 23.4375rem */
            .topbar {
              flex-direction: column;
              height: auto;
              padding: 0.625rem; /* 10px = 0.625rem */
              align-items: flex-start;
            }

            .left-container {
              flex-direction: column;
              width: 100%;
              align-items: flex-start;
            }

            .topbar-logo {
              height: 1.375rem; /* 22px = 1.375rem */
              margin: 0 0 0.625rem 0; /* 10px = 0.625rem */
            }

            .search-container {
              max-width: 100%;
              width: 100%;
              height: 1.875rem; /* 30px = 1.875rem */
              border-radius: 1.25rem; /* 20px = 1.25rem */
              margin: 0 0 0.625rem 0; /* 10px = 0.625rem */
              padding-left: 1.75rem; /* 28px = 1.75rem */
            }

            .search-icon {
              width: 0.875rem; /* 14px = 0.875rem */
              height: 0.875rem;
              left: 0.5rem; /* 8px = 0.5rem */
            }

            .search-bar {
              font-size: 0.75rem; /* 12px = 0.75rem */
              padding-left: 1.75rem; /* 28px = 1.75rem */
            }

            .user-info {
              flex-direction: row;
              gap: 0.5rem; /* 8px = 0.5rem */
              width: 100%;
              justify-content: flex-start;
            }

            .bell-icon {
              height: 1.125rem; /* 18px = 1.125rem */
              width: 1.125rem;
            }

            .user-img {
              height: 1.625rem; /* 26px = 1.625rem */
              width: 1.625rem;
            }

            .text-info {
              display: none; /* Hide text info on mobile to save space */
            }
          }
        `}
      </style>
      <div style={topbarStyle} className="topbar">
        <div style={leftContainerStyle} className="left-container">
          <img src={logo} alt="Sri Chaitanya Logo" style={logoStyle} className="topbar-logo" />
          <div style={searchContainerStyle} className="search-container">
            <IoIosSearch style={searchIconStyle} className="search-icon" />
            <input
              type="text"
              placeholder="Ask for anything"
              style={searchBarStyle}
              className="search-bar"
            />
          </div>
        </div>
        <div style={userInfoStyle} className="user-info">
          <img src={Belllogo} alt="Bell" style={bellStyle} className="bell-icon" />
          <img src={studentLogo} alt="STUDENT" style={imgStyle} className="user-img" />
          <div style={textInfoStyle} className="text-info">
            <div style={textBlockStyle} className="text-block">
              <span style={{ fontWeight: 'bold', fontSize: '0.8125rem' }}>HYD 256789</span> {/* 13px = 0.8125rem */}
              <p style={{ margin: 0, fontSize: '0.75rem' }}>Cashier</p> {/* 12px = 0.75rem */}
            </div>
            <img src={chevronDown} alt="Dropdown" style={{ width: '1.25rem', height: '1.25rem' }} className="chevron" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
