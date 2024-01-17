import React, { useState } from "react";
import "./App.css";
import axios from "axios";
 
const AddStudent = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
 
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "date") {
      setDob(value);
    }
    if (id === "radio1" || id === "radio2") {
      setGender(value);
    }
    if (id === "address") {
      setAddress(value);
    }
    if (id === "number") {
      setNumber(value);
    }
  };
 
  const validateForm = () => {
    const errors = {};
 
    if (!name.trim()) {
      errors.name = <small>"Name is required"</small>;
    }
    if (!dob) {
      errors.dob = <small>"DOB is required"</small>;
    }
    if (!gender) {
      errors.gender = <small>"Gender is required"</small>;
    }
    if (!address.trim()) {
      errors.address = <small>"Address is required"</small>;
    }
    if (!number.trim()) {
      errors.number = <small>"Mobile Number is required"</small>;
    } else if (!/^\d+$/.test(number.trim())) {
      errors.number = <small>"Invalid Mobile "</small>;
    }
 
    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!validateForm()) {
      // If validation fails, don't proceed with the submission
      return;
    }
 
    // Clear input fields
    setName("");
    setDob("");
    setGender("");
    setAddress("");
    setNumber("");
 
    // Log and make the API call
    console.log(name, dob, gender, address, number);
 
    axios
      .post("http://localhost:3000/student", {
        name: name,
        dob: dob,
        gender: gender,
        address: address,
        number: number,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
<>
<div className="form">
<form action="" onSubmit={handleSubmit}>
<h1>Student Data</h1>
<label htmlFor="">Student Name</label>
<input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
<span className="error">{errors.name}</span>
<br />
<label htmlFor="">DOB</label>
<input
            type="date"
            value={dob}
            id="date"
            onChange={(e) => handleInputChange(e)}
          />
<span className="error">{errors.dob}</span>
<br />
<label htmlFor="">Gender:</label>
          Male
<input
            type="radio"
            value="Male"
            id="radio1"
            onChange={(e) => handleInputChange(e)}
            checked={gender === "Male"}
            name="gender"
          />
          Female
<input
            type="radio"
            value="Female"
            id="radio2"
            onChange={(e) => handleInputChange(e)}
            checked={gender === "Female"}
            name="gender"
          />
<span className="error">{errors.gender}</span>
<br />
<label htmlFor="">Address</label>
<input
            type="text"
            id="address"
            value={address}
            onChange={(e) => handleInputChange(e)}
          />
<span className="error">{errors.address}</span>
<br />
<label htmlFor="">Mobile Number</label>
<input
            type="number"
            value={number}
            id="number"
            onChange={(e) => handleInputChange(e)}
          />
<span className="error">{errors.number}</span>
<br />
<button type="submit">Submit</button>
</form>
</div>
</>
  );
};
 
export default AddStudent;