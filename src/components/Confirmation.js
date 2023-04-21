import React from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import { jsPDF } from "jspdf";

// A function that calculates the price based on gender
const calculatePrice = (gender, price) => {
  return gender === "F" ? price * 0.8 : price;
};

// A function that generates a PDF report based on form data
const generateReport = (formData) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Registration Confirmation", 20, 20);

  const lineHeight = 8;
  let currentLine = 40;

  Object.entries(formData).forEach(([key, value]) => {
    if (key === "gender") {
      value = value === "M" ? "Male" : "Female";
    }
    doc.text(`${key}: ${value}`, 20, currentLine);
    currentLine += lineHeight;
  });

  doc.save("report.pdf");
};

const Confirmation = () => {
  const navigate = useNavigate();

  // Retrieve form data from sessionStorage
  const formData = JSON.parse(sessionStorage.getItem("formData"));

  // Calculate the price based on gender
  formData.price = calculatePrice(formData.gender, formData.price);

  // Go back to the form for editing
  const handleEdit = () => {
    navigate("/");
  };

  // Generate PDF report and navigate to the result page
  const handleConfirm = () => {
    generateReport(formData);
    navigate("/result");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Registration Confirmation
      </h2>
      <p style={{ marginBottom: "10px", textAlign: "center" }}>
        Please review the information provided before confirming your
        registration:
      </p>
      <ul style={{ textAlign: "center", marginBottom: "20px" }}>
        <li>Order Number: {formData.orderNumber}</li>
        <li>Document Type: {formData.documentType}</li>
        <li>Document: {formData.document}</li>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Gender: {formData.gender === "M" ? "Male" : "Female"}</li>
        <li>Date of Birth: {formData.dateOfBirth}</li>
        <li>Health Status: {formData.healthStatus}</li>
        <li>Comment: {formData.comment}</li>
        <li>Price: {formData.price}</li>
      </ul>

      <label htmlFor="image" style={{ marginBottom: "10px" }}>
        Image
      </label>
      <input
        type="file"
        name="image"
        accept="image/*"
        style={{ marginBottom: "20px" }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleEdit}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            borderRadius: "5px",
            background: "#ff6347",
            color: "#fff",
            border: "none",
          }}
        >
          Edit
        </button>
        <button
          onClick={handleConfirm}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            background: "#4caf50",
            color: "#fff",
            border: "none",
          }}
        >
          Confirm Registration
        </button>
        <PayPalButton formData={formData} style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
};

export default Confirmation;
