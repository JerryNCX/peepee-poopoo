import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from MongoDB API
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(`/api/users/${userId}`, { method: "DELETE" });
      fetchUserData(); // Refresh the table
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="calculation-container">
      <h2 className="table-title">User's Data Manage</h2>
      <table className="calculation-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Details</th>
            <th>Payment Proof</th>
            <th>Booking ID</th>
            <th>Verification</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.details}</td>
                <td>
                  <a href={user.paymentProof} target="_blank" rel="noopener noreferrer">
                    {user.paymentProof}
                  </a>
                </td>
                <td>{user.bookingID}</td>
                <td>{user.verification}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
