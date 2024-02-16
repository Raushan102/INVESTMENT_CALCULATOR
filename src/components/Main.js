// import { useState } from "react";

export default function Main({ onChange,userInputData}) {
 
  

  return (
    <section className="main_container">
      <div className="main_container_firstColum">
        <div className="main_container_firstColum_first_div">
          <label htmlFor="INITIAL INVESTMENT">INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInputData.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="ANNUAL INVESTMENT">ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInputData.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      <div className="main_container_secondColum">
        <div>
          <label htmlFor="EXPECTED RETURN">EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInputData.expectedReturn}

            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="DURATION">DURATION</label>
          <input
            type="number"
            required
            value={userInputData.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
