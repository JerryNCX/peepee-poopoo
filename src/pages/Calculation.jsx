import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/Calculation.css"; // Ensure this file is correctly imported

const Calculation = () => {
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/calculations") // Ensure backend is running
      .then((response) => {
        console.log("Data received:", response.data);
        setCalculations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching calculations:", error);
      });
  }, []);

  // Handle process update
  const handleProcessChange = async (id, newProcess) => {
    try {
      await axios.put(`http://localhost:3000/calculations/${id}`, { process: newProcess });
      setCalculations(calculations.map(calc => 
        calc._id === id ? { ...calc, process: newProcess } : calc
      ));
    } catch (error) {
      console.error("Error updating process:", error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/calculations/${id}`);
      setCalculations(calculations.filter(calc => calc._id !== id));
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <div className="calculation-container">
      <h2 className="table-title">User's Fee Calculation</h2>
      <table className="calculation-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Process</th>
            <th>From</th>
            <th>To</th>
            <th>Mileage</th>
            <th>Fees</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {calculations.map((calc, index) => (
            <tr key={calc._id}>
              <td>{index + 1}</td>
              <td>
                <select
                  value={calc.process}
                  onChange={(e) => handleProcessChange(calc._id, e.target.value)}
                >
                  <option value="waiting">Waiting</option>
                  <option value="in process">In Process</option>
                  <option value="done">Done</option>
                </select>
              </td>
              <td>{calc.from}</td>
              <td>{calc.to}</td>
              <td>{calc.mileage}</td>
              <td>${calc.fees}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(calc._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calculation;
