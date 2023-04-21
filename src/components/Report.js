import React from "react";

const Report = ({ formData }) => {
  const {
    OrderNumber,
    FirstName,
    LastName,
    Address,
    TotalPayment,
  } = formData;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        style={{
          borderCollapse: "collapse",
          textAlign: "left",
          backgroundColor: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "12px 15px", backgroundColor: "#1E90FF", color: "#fff" }}>Payment Receipt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "12px 15px" }}>Order at SuperPlazas.com</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>Order Number:</td>
            <td style={{ padding: "12px 15px" }}>{OrderNumber}</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>Customer:</td>
            <td style={{ padding: "12px 15px" }}>{FirstName} {LastName}</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>Address:</td>
            <td style={{ padding: "12px 15px" }}>{Address}</td>
          </tr>
          <tr>
            <td style={{ padding: "12px 15px" }}>Amount paid:</td>
            <td style={{ padding: "12px 15px" }}>${parseFloat(TotalPayment).toFixed(2)} USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
