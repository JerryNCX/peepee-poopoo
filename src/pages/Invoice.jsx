import React from "react";
import "../pages/Invoice.css";

const Invoice = () => {
  return (
    <div className="calculation-container">
      <h1 className="table-title">Invoice Notification</h1>
      <table className="calculation-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Booking ID</th>
            <th>Status</th>
            <th>Invoice</th>
            <th>Notify User</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#12345</td>
            <td>Arrived</td>
            <td><input type="file" accept=".pdf" /></td>
            <td>
              <button className="delete-btn" style={{backgroundColor: "#4CAF50"}}>
                Send Email
              </button>
            </td>
            <td><button className="delete-btn">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;