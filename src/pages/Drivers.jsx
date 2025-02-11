import React, { useEffect, useState } from "react";
import "./Drivers.css";

const Drivers = () => {
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
      <h2 className="table-title">Drivers's Data Manage</h2>
      <table className="calculation-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>IC/Passport</th>
            <th>Availability</th>
            <th>Reasons</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.icOrPassport}</td>
                <td>
                  <input type="checkbox" checked={user.availability} readOnly />
                </td>
                <td>
                  <button className="add-btn">Add</button>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;
