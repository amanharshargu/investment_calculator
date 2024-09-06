const ResultsTable = (props) => {
    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData, index) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>${yearData.savingsEndOfYear.toFixed(2)}</td>
              <td>${yearData.yearlyInterest.toFixed(2)}</td>
              <td>${(yearData.savingsEndOfYear - yearData.yearlyContribution * yearData.year - props.initialInvestment).toFixed(2)}</td>
              <td>${(yearData.yearlyContribution * yearData.year + props.initialInvestment).toFixed(2)}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    );
};

export default ResultsTable;