import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(false);

  const onSubmit = (data) => {
    sessionStorage.setItem("formData", JSON.stringify(data));
    navigate("/confirmation");
  };

  const handleDiscount = (e) => {
    if (e.target.value === "F") {
      setDiscount(true);
    } else {
      setDiscount(false);
    }
  };

  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Registration Form</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="documentType" style={{ marginBottom: ".5rem" }}>
          Document Type:
        </label>
        <select
          name="documentType"
          {...register("documentType", { required: true })}
          style={{
            padding: ".5rem",
            borderRadius: ".25rem",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          <option value="">Select</option>
          <option value="ID">ID</option>
          <option value="passport">Passport</option>
        </select>
        {errors.documentType && (
          <span style={{ color: "red", marginBottom: ".5rem" }}>
            This field is required
          </span>
        )}
      </div>

      <input type="hidden" {...register("orderNumber")} value={"aaa"} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="documentNumber" style={{ marginBottom: ".5rem" }}>
          Document Number:
        </label>
        <input
          name="documentNumber"
          type="text"
          {...register("documentNumber", { required: true })}
          style={{
            padding: ".5rem",
            borderRadius: ".25rem",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            width: "100%",
          }}
        />
        {errors.documentNumber && (
          <span style={{ color: "red", marginBottom: ".5rem" }}>
            This field is required
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstName" style={{ marginBottom: ".5rem" }}>
          First Name:
        </label>
        <input
          name="firstName"
          type="text"
          {...register("firstName", { required: true })}
          style={{
            padding: ".5rem",
            borderRadius: ".25rem",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            width: "100%",
          }}
        />
        {errors.firstName && (
          <span style={{ color: "red", marginBottom: ".5rem" }}>
            This field is required
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="lastName" style={{ marginBottom: ".5rem" }}>
          Last Name:
        </label>
        <input
          name="lastName"
          type="text"
          {...register("lastName", { required: true })}
          style={{
            padding: ".5rem",
            borderRadius: ".25rem",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            width: "100%",
          }}
        />
        {errors.lastName && (
          <span style={{ color: "red", marginBottom: ".5rem" }}>
            This field is required
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="gender" style={{ marginBottom: ".5rem" }}>
          Gender:
        </label>
        <select
          name="gender"
          {...register("gender", { required: true })}
          onChange={handleDiscount}
          style={{
            padding: ".5rem",
            borderRadius: ".25rem",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && (
          <span style={{ color: "red", marginBottom: ".5rem" }}>
            This field is required
          </span>
        )}
      </div>
      {discount && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="discountCode" style={{ marginBottom: ".5rem" }}>
            Discount Code:
          </label>
          <input
            name="discountCode"
            type="text"
            {...register("discountCode", { required: true })}
            style={{
              padding: ".5rem",
              borderRadius: ".25rem",
              border: "1px solid #ccc",
              marginBottom: "1rem",
              width: "100%",
            }}
          />
          {errors.discountCode && (
            <span style={{ color: "red", marginBottom: ".5rem" }}>
              This field is required
            </span>
          )}
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          type="submit"
          style={{
            padding: ".5rem 1rem",
            borderRadius: ".25rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
