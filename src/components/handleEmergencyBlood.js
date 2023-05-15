import React, { useState,useEffect } from "react";
import './handleEmergencyBlood.css'

function MassBloodWithdrawal({ transfusions }) {
  const [availableUnits, setAvailableUnits] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const countTransfusion = (type) => {
    let counter = 0;
    for (const transfusion of transfusions) {
      if (transfusion.bloodType === type) {
        counter += 1;
      }
    }
    return counter;
  };
  const [flag, setFlag] = useState(false);

  const totalTransfusions = () => {
    let total = {};

    for (const transfusion of transfusions) {
      total[transfusion.bloodType] = countTransfusion(transfusion.bloodType);
    }
    return total;
  };

  // let flag = false

  const handleWithdrawal = (bloodType) => {
    const total = totalTransfusions();
    if(flag === true){
      alert("אין מספיק מנות זמינות.")
      return 
    }
    setFlag(true)
    
    alert(` נלקחו ${total[bloodType]} מנות דם מסוג -O `);
      // alert()
    // setAvailableUnits(total[bloodType])

    let maxUnits = 0;
    if (bloodType === "O-") {
      setAvailableUnits(total[bloodType]);
      maxUnits = total[bloodType];
    } else {
      setErrorMsg("סוג דם לא תואם. אנא בחרו סוג דם -O");
      return;
    }
    if (availableUnits >= maxUnits) {
      setAvailableUnits(availableUnits - maxUnits);
      setErrorMsg("");
      alert(` נלקחו ${total[bloodType]} מנות דם מסוג -O `);
    } 
    // else {
    //   setErrorMsg("אין מספיק מנות זמינות.");
    // }
  };

  return (
    <div>
     
      {/* */}
      <h2> מנות דם עבור אר״ן</h2>
      <label>  {flag ? 0 :totalTransfusions()["O-"]}   קיים מנות דם O- :זמינות  </label>
      <button type="submit" onClick={() => handleWithdrawal("O-")}> משיכת מנות דם O- </button>
    
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}
export default MassBloodWithdrawal;
