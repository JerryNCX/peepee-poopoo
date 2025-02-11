import React from "react";
import "../pages/Invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-container">
      <h1 className="invoice-title">Invoice Notification</h1>
      <div className="table-container">
        <table className="invoice-table">
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
              <td><button className="notify-btn">Send Email</button></td>
              <td><button className="delete-btn">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
