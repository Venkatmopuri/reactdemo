import React from 'react';
import { X } from 'lucide-react';

const AddNewModal = ({ 
  showAddModal, 
  handleCloseAddModal, 
  addData, 
  handleChange, 
  handleSubmit 
}) => {
  if (!showAddModal) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '-85.5px',
      left: '260px',
      width: '1253px',
      height: '1050px',
      backdropFilter: 'blur(44px)',
      background: 'rgba(19, 11, 11, 0.87)',
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
        padding: '27px',
        position: 'relative',
        boxShadow: '0px 8px 8px -4px rgba(16,24,40,0.08)',
      }}>
        <button onClick={handleCloseAddModal} style={{
          position: 'absolute',
          top: '46px',
          right: '020px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}>
          <X size={20} />
        </button>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '33px' }}>Add New State</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151', }}>State ID</label>
            <input
              type="text"
              name="stateId"
              placeholder='01'
              value={addData.stateId}
              onChange={handleChange}
              style={{
                width: '94px',
                height: '30px',
                padding: '8px',
                marginTop: '4px',
                borderRadius: '8px',
                border: ' 1px solid #d1d5db',
                
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '14px', color: '#374151' }}>State Name</label>
            <input
              type="text"
              name="stateName"
              placeholder='Andhra pradesh'
              value={addData.stateName}
              onChange={handleChange}
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
              type="text"
              name="status"
              placeholder='Guntur'
              value={addData.status}
              onChange={handleChange}
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
              type="text"
              name="countryId"
              placeholder='01'
              value={addData.countryId}
              onChange={handleChange}
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
              type="text"
              name="syncStatus"
              placeholder='Andhra Pradesh'
              value={addData.syncStatus}
              onChange={handleChange}
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
            <label style={{ fontSize: '14px', color: '#374151' }}>Sync Date</label>
            <input
              type="text"
              name="syncDate"
              placeholder='Guntur'
              value={addData.syncDate}
              onChange={handleChange}
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
        <div
  style={{
    display: 'flex',
    gap: '10px',
    marginTop: '40px',
    justifyContent: 'flex-end',
  }}
>
  <button
    onClick={handleCloseAddModal}
    style={{ width: '119px', height: '40px', borderRadius: '8px', backgroundColor: 'white', color: '#ef4444', border: '1px solid #ef4444', cursor: 'pointer' }}>
  
    Cancel
  </button>
  <button
  onClick={handleSubmit}
  style={{
    flex: 1,
    height: '40px',
    minWidth: '350px', // Ensures the button is at least 100px wide
    marginRight: '-10px',
    margin: '',
    borderRadius: '8px',
    backgroundColor: '#3425FF',
    color: 'white',
    fontWeight: '',
    cursor: 'pointer',
    border: 'none',
  }}
>
  Add Field
</button>
</div>
      </div>
    </div>
  );
};

export default AddNewModal;