import React, { useState } from "react";

function StockApp() {
  const [companyName, setCompanyName] = useState("");
  const [preferredInvestment, setPreferredInvestment] = useState("");
  const [riskTolerance, setRiskTolerance] = useState("");
  const [checkedSectors, setCheckedSectors] = useState({
    IT: false,
    Healthcare: false,
    Finance: false,
    Energy: false,
  });

  const handleSectorChange = (e) => {
    const { name, checked } = e.target;
    setCheckedSectors((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    const selectedSectors = Object.keys(checkedSectors)
      .filter((sector) => checkedSectors[sector])
      .join(", ");

    let riskMessage = "";
    if (riskTolerance === "low") {
      riskMessage = "You prefer safe and secure investments.";
    } else if (riskTolerance === "medium") {
      riskMessage = "You are willing to take moderate risks.";
    } else if (riskTolerance === "high") {
      riskMessage = "You are ready to take high risks for greater returns.";
    } else {
      riskMessage = "No risk tolerance selected.";
    }

    alert(`
      Company Name: ${companyName}
      Preferred Investment: ${preferredInvestment || "Not selected"}
      Risk Tolerance: ${riskMessage}
      Selected Sectors: ${selectedSectors || "None"}
    `);
  };

  return (
    <div className="app">
      <h1 className="title">Stock Market Preferences</h1>
      <form className="stock-form" onSubmit={(e) => e.preventDefault()}>
        {/* Company Name */}
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* Sectors */}
        <div>
          <label>Sectors</label>
          <div className="option-group">
            <input
              type="checkbox"
              id="it"
              name="IT"
              onChange={handleSectorChange}
            />
            <label htmlFor="it">IT</label>
          </div>
          <div className="option-group">
            <input
              type="checkbox"
              id="healthcare"
              name="Healthcare"
              onChange={handleSectorChange}
            />
            <label htmlFor="healthcare">Healthcare</label>
          </div>
          <div className="option-group">
            <input
              type="checkbox"
              id="finance"
              name="Finance"
              onChange={handleSectorChange}
            />
            <label htmlFor="finance">Finance</label>
          </div>
          <div className="option-group">
            <input
              type="checkbox"
              id="energy"
              name="Energy"
              onChange={handleSectorChange}
            />
            <label htmlFor="energy">Energy</label>
          </div>
        </div>

        {/* Preferred Investment */}
        <div>
          <label htmlFor="investment">Preferred Investment</label>
          <select
            id="investment"
            value={preferredInvestment}
            onChange={(e) => setPreferredInvestment(e.target.value)}
          >
            <option value="">Select</option>
            <option value="short-term">Short-Term</option>
            <option value="long-term">Long-Term</option>
            <option value="intraday">Intraday</option>
          </select>
        </div>

        {/* Risk Tolerance */}
        <div>
          <label>Risk Tolerance</label>
          <div className="option-group">
            <input
              type="radio"
              id="low"
              name="risk"
              value="low"
              onChange={(e) => setRiskTolerance(e.target.value)}
            />
            <label htmlFor="low">Low</label>
          </div>
          <div className="option-group">
            <input
              type="radio"
              id="medium"
              name="risk"
              value="medium"
              onChange={(e) => setRiskTolerance(e.target.value)}
            />
            <label htmlFor="medium">Medium</label>
          </div>
          <div className="option-group">
            <input
              type="radio"
              id="high"
              name="risk"
              value="high"
              onChange={(e) => setRiskTolerance(e.target.value)}
            />
            <label htmlFor="high">High</label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StockApp;
