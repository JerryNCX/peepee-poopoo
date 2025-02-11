import React from "react";
import "../pages/Notification.css";

const Notification = () => {
  return (
    <div className="calculation-container">
      <h1 className="table-title">Notification Management</h1>
      <table className="calculation-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Status</th>
            <th>Booking ID</th>
            <th>Verification</th>
            <th>Driver Assigned</th>
            <th>Notify User</th>
            <th>Add Remarks</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>None</td>
            <td>#12345</td>
            <td>Verified</td>
            <td>John Doe</td>
            <td><button className="btn notify-btn">Send</button></td>
            <td><input type="text" placeholder="Add remarks..." /></td>
            <td><button className="delete-btn">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Notification;