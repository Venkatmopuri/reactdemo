import React from 'react';
import { X } from 'lucide-react';

const ViewModal = ({ viewData, closeViewModal }) => {
  if (!viewData) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '-85.0px',
      left: '260px',
      width: '1253px',
      height: '1050px',
      backdropFilter: 'blur(44px)',
      backgroundColor: 'rgba(15, 15, 15, 0.91)',
      zIndex: 999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '460px',
        height: '330px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '25px',
        position: 'center',
        borderBottom: '6px'
      }}>
        <div
  style={{
    display: 'flex',
    marginTop:'20px',
    alignItems: 'center', // Vertically center the button and heading
    justifyContent: 'space-between', // Adjust spacing between the two elements
    marginBottom: '30px',
  }}
>
  <h2
    style={{
      fontSize: '20px',
      fontWeight: '600',
      margin: 0, // Remove default margin to align properly
    }}
  >
    State
  </h2>
  <button
    onClick={closeViewModal}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      margin: 0, // Reset margins for better alignment
    }}
  >
    <X size={20} />
  </button>
</div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>State ID</label>
            <input
              value={viewData.stateId}
              readOnly
              style={{
                width: '94px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>State name</label>
            <input
              value={viewData.stateName}
              readOnly
              style={{
                width: '152px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>Status</label>
            <input
              value={viewData.status}
              readOnly
              style={{
                width: '152px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>Country ID</label>
            <input
              value={viewData.countryId}
              readOnly
              style={{
                width: '94px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>Sync Status</label>
            <input
              value={viewData.syncStatus}
              readOnly
              style={{
                width: '152px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
              }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>Sync Date</label>
            <input
              value={viewData.syncDate}
              readOnly
              style={{
                width: '152px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
              }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
          <button style={{ width: '119px', height: '40px', borderRadius: '8px', backgroundColor: 'white', color: '#ef4444', border: '1px solid #ef4444', cursor: 'pointer' }}>
            Delete
          </button>
          <button style={{ width: '370px', height: '40px', borderRadius: '8px', backgroundColor: '#3425FF', color: 'white', fontWeight: 'bold', cursor: 'pointer', border: 'none', marginRight:'-10px' }}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;