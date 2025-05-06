import React, { useState } from 'react';
import { Pencil, Trash2, Eye, Plus, Upload } from 'lucide-react';
import FilterIcon from '../Images/Filter.png';
import ViewModal from './Viewmodal';
import AddNewModal from './Addnewmodal';

// Initial data
const initialData = [
  { stateId: '1', stateName: 'Andhra Pradesh', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 1 },
  { stateId: '2', stateName: 'Arunachal Pradesh', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 2 },
  { stateId: '3', stateName: 'Assam', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 3 },
  { stateId: '4', stateName: 'Bihar', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 4 },
  { stateId: '5', stateName: 'Chhattisgarh', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 5 },
  { stateId: '6', stateName: 'Goa', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 6 },
  { stateId: '7', stateName: 'Gujarat', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 7 },
  { stateId: '8', stateName: 'Haryana', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 8 },
  { stateId: '9', stateName: 'Himachal Pradesh', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 9 },
  { stateId: '10', stateName: 'Jammu and Kashmir', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 10 },
  { stateId: '11', stateName: 'Jharkhand', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 11 },
  { stateId: '12', stateName: 'Jharkhand', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 12 },
  { stateId: '13', stateName: 'Karnataka', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 13 },
  { stateId: '14', stateName: 'Kerala', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 14 },
  { stateId: '15', stateName: 'Madhya Pradesh', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 15 },
  { stateId: '16', stateName: 'Maharashtra', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 16 },
  { stateId: '17', stateName: 'Manipur', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 17 },
  { stateId: '18', stateName: 'Meghalaya', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 18 },
  { stateId: '19', stateName: 'Mizoram', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 19 },
  { stateId: '20', stateName: 'Nagaland', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 20 },
  { stateId: '21', stateName: 'Odisha', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 21 },
  { stateId: '22', stateName: 'Punjab', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 22 },
  { stateId: '23', stateName: 'Rajasthan', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 23 },
  { stateId: '24', stateName: 'Sikkim', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 24 },
  { stateId: '25', stateName: 'Tamil Nadu', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 25 },
  { stateId: '26', stateName: 'Tripura', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 26 },
  { stateId: '27', stateName: 'Uttaranchal', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 27 },
  { stateId: '28', stateName: 'Uttar Pradesh', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 28 },
  { stateId: '29', stateName: 'West Bengal', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 29 },
  { stateId: '30', stateName: 'Andaman and Nicobar Islands', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 30 },
  { stateId: '31', stateName: 'Chandigarh', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 31 },
  { stateId: '32', stateName: 'Dadra and Nagar Haveli', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 32 },
  { stateId: '33', stateName: 'Daman and Diu', status: '0', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 33 },
  { stateId: '34', stateName: 'Delhi', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 34 },
  { stateId: '35', stateName: 'Lakshadweep', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 35 },
  { stateId: '36', stateName: 'Puducherry', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 36 },
  { stateId: '37', stateName: 'Riyadh', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 37 },
  { stateId: '38', stateName: 'Dubai', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 38 },
  { stateId: '39', stateName: 'Telangana', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 39 },
  { stateId: '40', stateName: 'Uttarakhand', status: '1', countryId: '01', syncStatus: 'Updated', syncDate: '2025-04-29', id: 40 },
];

const StatePage = () => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewData, setViewData] = useState(null);
  const [addData, setAddData] = useState({
    stateId: '',
    stateName: '',
    status: '',
    countryId: '',
    syncStatus: '',
    syncDate: '',
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Array(initialData.length).fill(false)); // Updated to use initialData.length
  const itemsPerPage = 15;

  // Pagination
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // View Modal
  const openViewModal = (item) => {
    setViewData(item);
  };

  const closeViewModal = () => {
    setViewData(null);
  };

  // Row selection
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedRows(selectedRows.map(() => newSelectAll));
  };

  const handleRowSelect = (id) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[id] = !updatedSelectedRows[id];
    setSelectedRows(updatedSelectedRows);
  };

  // Add New Modal handlers
  const handleAddNewField = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setAddData({
      stateId: '',
      stateName: '',
      status: '',
      countryId: '',
      syncStatus: '',
      syncDate: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...addData,
      id: data.length + 1, // Adjusted to ensure unique ID
    };
    setData((prevData) => [...prevData, newEntry]);
    setSelectedRows((prev) => [...prev, false]);
    console.log('Submitted:', newEntry);
    handleCloseAddModal();
  };

  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#f9f9f9',
      minHeight: '823px',
      fontFamily: 'sans-serif',
      marginLeft: '277px',
      marginTop: '77px',
      width: '1105px',
      position: 'relative'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff', 
        padding: '16px 24px',
        borderRadius: '8px',
        // boxShadow: '0px 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600' }}>State</h2>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #ccc',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#4b5563',
            position: 'relative',
            backgroundColor: 'white',
          }}>
            <img src={FilterIcon} alt="Filter" style={{ width: '23px', height: '23px' }} />
            Filter
            <div style={{
              width: '18px',
              height: '18px',
              backgroundColor: 'rgb(240, 88, 88)',
              borderRadius: '50%',
              position: 'absolute',
              top: '-7px',
              right: '-2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '10px',
              fontWeight: 'bold',
            }}>1</div>
          </button>
          <button style={{
            height: '37px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '14px',
            color: '#4b5563'
          }}>
            <Upload size={16} /> Export
          </button>
          <button
            onClick={handleAddNewField}
            style={{
              height: '37px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#3c5fff',
              color: 'white',
              padding: '7px 12px',
              borderRadius: '6px',
              fontSize: '14px',
              border: 'none'
            }}
          >
            <Plus size={16} /> Add New Field
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ marginTop: '0px', overflowX: 'auto',height:'650px' }}>
        <table style={{
          width: '100%',
          height:'25px',
          fontSize: '14px',
          textAlign: 'left',
          color: 'rgba(99, 97, 97, 0.95)',
          fontFamily: 'Arial, sans-serif',
        }}
        >
          <thead style={{
            backgroundColor: 'rgb(246, 249, 254)',
            fontSize: '14px',
            color: 'rgba(153, 153, 153, 0.95)',
            fontFamily: 'Arial',
            // fontWeight: '',
            // fontStyle: 'inherit ',
            boxShadow: '0px 10px 6px -20px rgba(0, 0, 0, 0.1)' // Added shadow
          }}>
            <tr>
              <th style={{ padding: '12px' }}>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  style={{
                    appearance: 'none',
                    width: '20px',
                    height: '20px',
                    backgroundColor: selectAll ? '#3b82f6' : '#FFFFFF',
                    borderRadius: '6px',
                    border: '1px solid #D0D5DD',
                    cursor: 'pointer',
                    position: 'relative',

                  }}
                  className="custom-checkbox"
                />
                <style jsx>{`
                  .custom-checkbox:checked::after {
                    content: '✔';
                    color: white;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    fontSize: 12px;
                  }
                `}</style>
              </th>
              <th style={{ padding: '12px' , fontWeight:'normal'}}>State ID</th>
              <th style={{ padding: '12px', fontWeight:'normal' }}>State Name</th>
              <th style={{ padding: '12px', fontWeight:'normal' }}>Status</th>
              <th style={{ padding: '12px', fontWeight:'normal' }}>Country ID</th>
              <th style={{ padding: '12px' , fontWeight:'normal'}}>Sync Status</th>
              <th style={{ padding: '12px', fontWeight:'normal' }}>Sync Date</th>
              <th style={{ padding: '12px', textAlign: 'center', fontWeight:'normal' }}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} style={{
                borderBottom: '1px solid rgb(19, 21, 24)',
                backgroundColor: 'rgb(246, 249, 250)',
                boxShadow: '1px  0px 30px rgba(0, 0, 0s, 0.05)',
                transition: 'box-shadow 0.8s ease',
                height:'5px'
              }}>
                <td style={{ padding: '12px' }}>
                  <input
                    type="checkbox"
                    checked={selectedRows[item.id - 1]} // Adjusted index to match id
                    onChange={() => handleRowSelect(item.id - 1)}
                    style={{
                      appearance: 'none',
                      width: '20px',
                      height: '20px',
                      backgroundColor: selectedRows[item.id - 1] ? '#3b82f6' : '#FFFFFF',
                      borderRadius: '6px',
                      border: '1px solid #D0D5DD',
                      cursor: 'pointer',
                      position: 'relative',
                      // height:'5000px'
                    }}
                    className="custom-checkbox"
                  />
                </td>
                <td style={{ padding: '12px' }}>{item.stateId}</td>
                <td style={{ padding: '12px' }}>{item.stateName}</td>
                <td style={{ padding: '12px' }}>{item.status}</td>
                <td style={{ padding: '12px' }}>{item.countryId}</td>
                <td style={{ padding: '12px' }}>{item.syncStatus}</td>
                <td style={{ padding: '12px' }}>{item.syncDate}</td>
                <td style={{
                  padding: '12px',
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Trash2 size={18} style={{ color: '#4b5563', cursor: 'pointer' }} />
                  <Pencil size={18} style={{ color: '#4b5563', cursor: 'pointer' }} />
                  <div
                    onClick={() => openViewModal(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      color: '#7B7B7B'
                    }}>
                    <Eye size={18} />
                    <span style={{ fontSize: '14px', color: '#7B7B7B'}}>View</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '16px'
      }}>
        <button onClick={handlePrevious} style={{
          border: '1px solid #ccc',
          padding: '8px 16px',
          borderRadius: '7px',
          backgroundColor: '#FFFFFF',
          color: '#4b5563'
        }}>← Previous</button>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(num => (
            <button
              key={num + 1}
              onClick={() => setCurrentPage(num + 1)}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                backgroundColor: currentPage === num + 1 ? '#3b82f6' : '#fff',
                color: currentPage === num + 1 ? 'white' : '#4b5563',
                border: '0px solid #ccc'
              }}>{num + 1}</button>
          ))}
        </div>
        <button onClick={handleNext} style={{
          border: '1px solid #ccc',
          padding: '8px 16px',
          borderRadius: '7px',
          backgroundColor: ' #FFFFFF',
          color: '#4b5563'
        }}>Next →</button>
      </div>

      {/* Modals */}
      <ViewModal viewData={viewData} closeViewModal={closeViewModal} />
      <AddNewModal
        showAddModal={showAddModal}
        handleCloseAddModal={handleCloseAddModal}
        addData={addData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default StatePage;