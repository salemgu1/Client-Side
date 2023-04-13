import React, { useState } from "react";
import "./BloodTransfusion.css";

export default function BloodManagement({ transfusions }) {
  const [bloodType, setBloodType] = useState("");
  const [amount, setAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const blood = {
    "A+": { Donate: ["A+","AB+"], Receive: ["A+","A-","O+","O-"] },
    "O+": { Donate: ["O+","A+","B+","AB+"], Receive: ["O+","O-"] },
    "B+": { Donate: ["B+","AB+"], Receive: ["B+","B-","O+","O-"] },
    "AB+": { Donate: ["AB+"], Receive: ["A+","O+","B+","AB+","A-","O-","B-","AB-"] },
    "A-": { Donate: ["A+","A-","AB+","AB-"], Receive: ["A-","O-"] },
    "O-": { Donate: ["A+","O+","B+","AB+","A-","O-","B-","AB-"], Receive: ["O-"] },
    "B-": { Donate: ["B-","AB-","B+","AB+"], Receive: ["B-","O-"] },
    "AB-": { Donate: ["AB+","AB-"], Receive: ["AB-","A-","B-","O-"] },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const updateBloodType = (event) => {
    setBloodType(event.target.value);
  };

  const updateAmount = (event) => {
    setAmount(event.target.value);
  };

  const countTransfusion = (type) => {
    let counter = 0;
    for (const transfusion of transfusions) {
      if (transfusion.bloodType === type) {
        counter += 1;
      }
    }
    return counter;
  };

  const totalTransfusions = () => {
    let total = {};

    for (const transfusion of transfusions) {
      total[transfusion.bloodType] = countTransfusion(transfusion.bloodType);
    }
    return total;
  };

  const checkBloodAvailability = () => {
    setErrorMsg("");
    const total = totalTransfusions();
    
    if (amount > total[bloodType]) {
      console.log(getAvailableBlood());

      setErrorMsg(`אין מספיק מנות זמינות.${getAvailableBlood()}`);
    }
  };
  const getAvailableBlood =()=>{
    const arr = []
    const total = totalTransfusions()
    for (const b of Object.keys(blood)) {
      if(blood[b].Donate.includes(bloodType) && total[b]>amount){
        arr.push(b);
      }
    }
    return arr
  }
  return (
    <div onSubmit={handleSubmit}>
            <h2>  ניפוק מנות דם  </h2>

      <label>
        : סוג הדם הנתרם
        <input type="text" value={bloodType} onChange={updateBloodType} />
      </label>
      <br />
      <label>
        : מספר מנות הדם הנדרשות
        <input type="number" value={amount} onChange={updateAmount} required />
      </label>
      <button type="submit" onClick={checkBloodAvailability}>
        שלח
      </button>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}
