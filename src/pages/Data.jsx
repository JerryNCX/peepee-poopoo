import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Data.css";

const Data = () => {
  const navigate = useNavigate();

  return (
    <div className="data-container">
      <h1 className="data-title">Data Management</h1>
      <div className="data-boxes">
        <div className="data-box" onClick={() => navigate("/users")}>Users</div>
        <div className="data-box" onClick={() => navigate("/drivers")}>Drivers</div>
      </div>
    </div>
  );
};

export default Data;
