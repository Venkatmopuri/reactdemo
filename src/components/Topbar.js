import React from 'react';
import { IoIosSearch } from "react-icons/io";
import logo from '../Images/Sri Chaitanya logo.png'; 
import studentLogo from '../Images/STUDENT.png';
import Belllogo from '../Images/Bell.png';
import chevronDown from '../Images/chevron-down.png';

const Topbar = () => {// topbar container
  const topbarStyle = {
    width: '1400px',
    height: '77px',
    borderBottom: '1px solid #ccc',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 1000,
    padding: '0 20px',
  };

  const logoStyle = { //caithanya logo style
    height: '38px',
    width:'159.98PX',
    marginRight: '80px',
  };

  const searchContainerStyle = {//search bar container
    position: "relative",
    width: "472px",
    height: "45px",
    marginLeft: "70px",
    marginTop: "11px",
    borderRadius: "26px",
    background: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    paddingLeft: "36px",
    boxShadow: "0 1px 6px rgba(0, 0, 0, 0.1)"
  };

  const searchBarStyle = {
    width: "396px",
    height: "30%",
    border: "none",
    top: '10.23px',
    outline: "none",
    fontSize: "16px",
    borderRadius: "30px",
    background: "transparent"
  };

  const searchIconStyle = {
    position: "absolute",
    width: "20px",
    height: "40px",
    top: "50%",
    left: "11px",
    transform: "translateY(-50%)",
  };

  const userInfoStyle = {
    marginLeft: '420PX',
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    width: '320px',
    height: '60px',
  };

  const bellStyle = {
    height: '25px',
    width: '25px',
    marginLeft:'-px',
    
  };

  const imgStyle = {
    height: '36px',
    width: '36px',      
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const textInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
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
    <div style={topbarStyle}>
      <img src={logo} alt="Sri Chaitanya Logo" style={logoStyle} />
      <div style={searchContainerStyle}>
        <IoIosSearch style={searchIconStyle} />
        <input
          type="text"
          placeholder="Ask for anything"
          style={searchBarStyle}
        />
      </div>
      <div style={userInfoStyle}>
        <img src={Belllogo} alt="Bell" style={bellStyle} />
        <img src={studentLogo} alt="STUDENT" style={imgStyle} />
        <div style={textInfoStyle}>
          <div style={textBlockStyle}>
            <span style={{ fontWeight: 'bold', fontSize: '13px' }}>HYD 256789</span>
            <p style={{ margin: 0, fontSize: '12px' }}>Cashier</p>
          </div>
          <img src={chevronDown} alt="Dropdown" style={{ width: 20, height: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
