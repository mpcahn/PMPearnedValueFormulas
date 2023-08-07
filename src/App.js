import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [BAC, setBAC] = useState(100);
  const [PPC, setPPC] = useState(50);
  const [APC, setAPC] = useState(45);
  const [AC, setAC] = useState(40);

  const round2ndDig = (fl) => {
    return Math.round(fl * 100) / 100;
  };

  let PV = PPC * 0.01 * BAC;
  let EV = APC * 0.01 * BAC;
  let CV = EV - AC;
  let CPI = round2ndDig(EV / AC);
  let SV = EV - PV;
  let SPI = round2ndDig(EV / PV);
  let EAC = round2ndDig(BAC / CPI);
  let ETC = EAC - AC;
  let VAC = BAC - EAC;
  let TCPI = round2ndDig((BAC - EV) / (BAC - AC));

  return (
    <div className="App">
      <h1>Earned Value Memorization Practice</h1>
      <label>Enter Budget At Completion (BAC): </label>
      <input value={BAC} onChange={(e) => setBAC(e.target.value)} />
      <br />
      <label>Enter Planned Percent Complete: </label>
      <input value={PPC} onChange={(e) => setPPC(e.target.value)} />
      <p>
        Planned Value (PV) = Planned Percent Complete * BAC = {PPC}% * ${BAC} =
        ${PV}
      </p>
      <label>Enter Actual Percent Complete: </label>
      <input value={APC} onChange={(e) => setAPC(e.target.value)} />
      <p>
        Earned Value (EV) = Actual Percent Complete * BAC = {APC}% * ${BAC} = $
        {EV}
      </p>
      <label>Enter Actual Cost (AC): </label>
      <input value={AC} onChange={(e) => setAC(e.target.value)} />
      <p>
        Cost Variance (CV) = EV - AC = ${EV} - ${AC} = ${CV}
      </p>
      <p>
        Cost Performance Index (CPI) = EV / AC = ${EV} / ${AC} = {CPI}
      </p>
      <p>
        Schedule Variance (SV) = EV - PV = ${EV} - ${PV} = ${SV}
      </p>
      <p>
        Schedule Performance Index (SPI) = EV / PV = ${EV} / ${PV} = {SPI}
      </p>
      <p>
        Estimate At Completion (EAC) = BAC / CPI = ${BAC} / {CPI} = ${EAC}
      </p>
      <p>
        Estimate To Completion (ETC) = EAC - AC = ${EAC} - ${AC} = ${ETC}
      </p>
      <p>
        Variance At Completion (VAC) = BAC - EAC = ${BAC} - ${EAC} = ${VAC}
      </p>
      <p>
        To-Complete Performance Index (TCPI) = (BAC - EV) / (BAC - AC) = (${BAC}{" "}
        - ${EV}) / (${BAC} - ${AC}) = {TCPI}
      </p>
    </div>
  );
}
