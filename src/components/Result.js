import { calculateInvestmentResults, formatter } from "./util.js";

export default function Result({ input }) {
  let calculatedData = calculateInvestmentResults(input);
  const initialInvestment =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annualInvestment;
  console.log(calculatedData);
  return (
    <table>
      <thead>
        <tr className="tableColum">
          <th>year</th>
          <th>investment value</th>
          <th>interest(year)</th>
          <th>total interest</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((currentData) => {

          const totalInterest=currentData.valueEndOfYear-currentData.annualInvestment*currentData.year-initialInvestment;
          const  totalInvestment=currentData.valueEndOfYear-totalInterest;
          return (
            <tr>
              <td>{currentData.year}</td>
              <td>{formatter.format(currentData.valueEndOfYear)}</td>
              <td>{formatter.format(currentData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>

              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
