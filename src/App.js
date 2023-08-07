import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [BAC, setBAC] = useState(100);
  const [PPC, setPPC] = useState(50);
  const [APC, setAPC] = useState(45);
  const [AC, setAC] = useState(110);

  let PV = PPC * 0.01 * BAC;
  let EV = APC * 0.01 * BAC;

  return (
    <div className="App">
      <label>Enter Budget At Completion (BAC): </label>
      <input value={BAC} onChange={(e) => setBAC(e.target.value)} />
      <br />
      <label>Enter Planned Percent Complete: </label>
      <input value={PPC} onChange={(e) => setPPC(e.target.value)} />
      <p>
        Planned Value (PV) = Planned Percent Complete * BAC = {PPC} * {BAC} ={" "}
        {PV}%
      </p>
      <label>Enter Actual Percent Complete: </label>
      <input value={APC} onChange={(e) => setAPC(e.target.value)} />
      <p>
        Earned Value (PV) = Actual Percent Complete * BAC = {APC} * {BAC} = {EV}
        %
      </p>
      <label>Enter Actual Cost (AC): </label>
      <input value={AC} onChange={(e) => setAC(e.target.value)} />
    </div>
  );
}
