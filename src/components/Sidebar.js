import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentsIcon from '../Images/StudentsIcon.png';
import ApplicationIcon from '../Images/Application.png';
import EmployeeIcon from '../Images/Employee.png';
import FleetIcon from '../Images/Fleet.png';
import WarehouseIcon from '../Images/Warehouse.png';
import SMSIcon from '../Images/SMS.png';
import QuestionBankIcon from '../Images/SMS.png';
import AssetsManagementIcon from '../Images/Assets Management.png';
import CCTVIcon from '../Images/CCTC.png';
import PaymentServicesIcon from '../Images/Payment Services.png';
import HRMSIcon from '../Images/HRMS.png';

const menuItems = [
  {
    name: 'Students',
    icon: (
      <img
        src={StudentsIcon}
        alt="Students"
        style={{
          width: 20,
          height: 20,
          filter: 'invert(0%) sepia(100%) saturate(800%) hue-rotate(200deg) brightness(100%) contrast(100%)',
        }}
      />
    ),
    route: '/',
  },
  { name: 'Application', icon: <img src={ApplicationIcon} alt="Application" style={{ width: '20px', height: '20px' }} /> },
  { name: 'Employee', icon: <img src={EmployeeIcon} alt="Employee" style={{ width: '20px', height: '20px' }} />, route: '/employee' },
  { name: 'Fleet', icon: <img src={FleetIcon} alt="Fleet" style={{ width: '20px', height: '20px' }} />, route: '/fleet' },
  { name: 'Warehouse', icon: <img src={WarehouseIcon} alt="Warehouse" style={{ width: '20px', height: '20px' }} /> },
  { name: 'SMS', icon: <img src={SMSIcon} alt="SMS" style={{ width: '20px', height: '20px' }} /> },
  { name: 'Question Bank', icon: <img src={QuestionBankIcon} alt="Question Bank" style={{ width: '20px', height: '20px' }} /> },
  { name: 'Assets Management', icon: <img src={AssetsManagementIcon} alt="Assets Management" style={{ width: '20px', height: '20px' }} /> },
  { name: 'Payment Services', icon: <img src={PaymentServicesIcon} alt="Payment Services" style={{ width: '20px', height: '20px' }} /> },
  { name: 'CCTV', icon: <img src={CCTVIcon} alt="CCTV" style={{ width: '20px', height: '20px' }} /> },
  { name: 'HRMS', icon: <img src={HRMSIcon} alt="HRMS" style={{ width: '20px', height: '20px' }} /> },
];

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const sidebarStyle = {
    width: '289px',
    height: '823px',
    position: 'fixed',
    top: '77px',
    left: 0,
    BiBorderRight: '1px solid rgb(91, 63, 63)',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #FAFAFB 100%)',
    padding: '20px 10px',
    overflowY: 'auto',
  };
  

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    width: '219px',
    height: '1px',
    borderRadius: '8px',
    padding: '16px 7px',
    gap: '1px',
  };

  const itemStyle = {
    padding: '10px 15px',
    borderRadius: '8px',
    marginBottom: '5px', // Reduced gap for non-Students items
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    
  };

  const studentItemStyle = {
    ...itemStyle,
    background: 'linear-gradient(90deg, rgb(210, 223, 240) 0%, rgb(249, 251, 251) 45%, rgb(252, 255, 255) 100%)',
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: '10px', // Maintain original gap for Students
  };

  const lightFontColor = '#A0A0A0';
  const lightFontStyle = {
    fontFamily: '"Arial", sans-serif',
    fontSize: '14px',
    fontWeight: 'normal',
  };

  return (
    <div style={sidebarStyle}>
      <div style={titleStyle}>Modules</div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {menuItems.map(({ name, icon, route }) => {
          const isStudent = name === 'Students';
          const isLightColorItem = [
            'Application', 'Employee', 'Fleet', 'Warehouse', 'SMS',
            'Question Bank', 'Assets Management', 'Payment Services',
            'CCTV', 'HRMS',
          ].includes(name);

          const isHovered = hoveredItem === name;

          const hoverStyle = isHovered
            ? {
                backgroundColor: '#f0f4ff',
                color: '',
                fontWeight: 500,
              }
            : {};

          const itemFontStyle = {
            fontWeight: isStudent ? 'bold' : 'normal',
            color: isStudent ? 'blue' : isLightColorItem ? lightFontColor : 'black',
            ...(isLightColorItem ? lightFontStyle : {}),
          };

          return (
            <li
              key={name}
              style={{
                ...(isStudent ? studentItemStyle : itemStyle),
                ...itemFontStyle,
                ...(!isStudent ? hoverStyle : {}),
              }}
              onClick={() => route && navigate(route)}
              onMouseEnter={() => !isStudent && setHoveredItem(name)}
              onMouseLeave={() => !isStudent && setHoveredItem(null)}
            >
              {icon} {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;