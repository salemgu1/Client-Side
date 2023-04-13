import React, {useState} from "react";

function MassBloodWithdrawal({transfusions}) {
    const [availableUnits, setAvailableUnits] = useState(50);
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

    const totalTransfusions = () => {
        let total = {};
    
        for (const transfusion of transfusions) {
          total[transfusion.bloodType] = countTransfusion(transfusion.bloodType);
        }
        return total;
      };

    const handleWithdrawal = (bloodType) => {
        const total = totalTransfusions()
        // setAvailableUnits(total[bloodType])
        
        let maxUnits = 0;
        if (bloodType === "O-") {
            maxUnits = 10;
        } else {
            setErrorMsg("סוג דם לא תואם. אנא בחרו סוג דם -O");
            return;
        }
        if (availableUnits >= maxUnits) {
            setAvailableUnits(availableUnits - maxUnits);
            setErrorMsg("");
            alert(` נלקחו ${maxUnits} מנות דם מסוג -O `);
        } else {
            setErrorMsg("אין מספיק מנות זמינות.");
        }
    };

    return (
        <div>
            <h2>נימוקי דחיפות לניפוק מנות דם באר״ן</h2>
            <p> קיים { availableUnits }  מנות דם   O-  :זמינות    </p>
            <button onClick={() => handleWithdrawal("O-")}> משיכת מנות דם O- </button>
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    );
}
export default MassBloodWithdrawal;