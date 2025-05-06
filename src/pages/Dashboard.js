import React from 'react';
import ModuleButton from '../components/ModuleButton';
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import CourseTrackImg from '../Images/Course Track.png';
import ProgramNameImg from '../Images/Program Name.png';
import CityImg from '../Images/City.png';
import OrganizationImg from '../Images/Organization.png';
import StreamImg from '../Images/Stream.png';
import FeePaymentYearImg from '../Images/Fee Payment Year.png';
import FeeHeadsImg from '../Images/Fee Heads.png'; 
import CampusImg from '../Images/Campus.png';
import StateImg from '../Images/State.png';
import CardTypeImg from '../Images/Card Type.png';

const Dashboard = () => {
  const navigate = useNavigate();

  const dashboardStyle = {
    position: 'fixed',
    top: '77px',
    left: '284px',
    width: '1180px',
    height: '823px',
    padding: '30px',
    backgroundColor: '#F7F9FA',
    overflowY: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const leftPanelStyle = {
    width: '50%',
    paddingRight: '15px',
  };

  const rightPanelStyle = {
    width: '45%',
    paddingLeft: '15px',
    
  };

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-2.2%',
    color: 'black',
    width: '479px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
  };

  const subtitleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '-0.6%',
    width: '479px',
    height: '38px',
    color: '#6E7C87',
  };

  const subtitleAndButtonsContainer = {
    width: '460px',
    height: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0px',
    marginTop: '3px',
    padding: '8px',
    borderRadius: '10px',
  };

  const searchInputContainer = {
    position: 'relative',
    width: '321px',
    height: '39px',
    marginTop: '15px',
  };

  const searchIconStyle = {
    position: 'absolute',
    left: '13px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '17px',
    width: '17px',
    color: '#000000',
    zIndex: 1,
  };

  const searchInputStyle = {
    width: '321px',
    height: '39px',
    borderRadius: '31px',
    border: '1px solid #DCDCDC',
    background: '#FFFFFF',
    padding: '11px 136px 11px 40px',
    fontSize: '14px',
    boxSizing: 'border-box',
  };

  return (
    <div style={dashboardStyle}>
      <div style={leftPanelStyle}>
        <h1 style={titleStyle}>Students Masters</h1>
        <div>
          <p style={subtitleStyle}>
            Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
          </p>
          <div style={searchInputContainer}>
            <IoIosSearch style={searchIconStyle} />
            <input
              type="text"
              placeholder="Search for the module"
              style={searchInputStyle}
            />
          </div>
        </div>
      </div>

      <div style={rightPanelStyle}>
        <div style={subtitleAndButtonsContainer}>
          <ModuleButton label="State" icon={<img src={StateImg} alt="State" style={{ width: '24px', height: '24px' }} />} onClick={() => navigate('/state')} />
          <ModuleButton label="City" icon={<img src={CityImg} alt="City" style={{ width: '24px', height: '24px' }} />} onClick={() => navigate('/city')} />
          <ModuleButton label="Campus" icon={<img src={CampusImg} alt="Campus" style={{ width: '24px', height: '24px' }} />}  />
          <ModuleButton label="Fee Payment Year" icon={<img src={FeePaymentYearImg} alt="Fee Payment Year" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="Fee Heads" icon={<img src={FeeHeadsImg} alt="Fee Heads" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="Organization" icon={<img src={OrganizationImg} alt="Organization" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="CardType" icon={<img src={CardTypeImg} alt="CardType" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="Stream" icon={<img src={StreamImg} alt="Stream" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="Program Name" icon={<img src={ProgramNameImg} alt="Program Name" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="Exam Program" icon={<img src={CourseTrackImg} alt="Exam Program" style={{ width: '24px', height: '24px' }} />} />
          <ModuleButton label="Course Track" icon={<img src={CourseTrackImg} alt="Course Track" style={{ width: '24px', height: '24px' }} />} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
