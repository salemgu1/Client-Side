import React, { useState } from "react";
import "./BloodTransfusion.css";

export default function BloodTransfusion() {
  const [bloodType, setBloodType] = useState("");
  const [date, setDate] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const updateName = (event) => {
    setFullName(event.target.value);
  };
  const updateBloodType = (event) => {
    setBloodType(event.target.value);
  };
  const updateDate = (event) => {
    setDate(event.target.value);
  };

  const updateIdNumber = (event) => {
    setIdNumber(event.target.value);
  };

  const addTransfusionRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bloodType: bloodType,
      date: date,
      idNumber: idNumber,
      name: fullName,
    }),
  };

  const addTransfusion = () => {
    fetch("http://localhost:4000/transfusion", addTransfusionRequest)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div onSubmit={handleSubmit}>
      <h2> : טופס טרומת דם</h2>

      <label>
        : סוג הדם הנתרם
        <input type="text" value={bloodType} onChange={updateBloodType} />
      </label>
      <br />
      <label>
        : תאריך התרומה
        <input type="date" value={date} onChange={updateDate} />
      </label>
      <br />
      <label>
        : מספר ת"ז של הנתרם
        <input type="text" value={idNumber} onChange={updateIdNumber} />
      </label>
      <br />
      <label>
        : שם הנתרם
        <input type="text" value={fullName} onChange={updateName} />
      </label>
      <br />
      <button type="submit" onClick={addTransfusion}>
        שלח
      </button>
    </div>
  );
}
