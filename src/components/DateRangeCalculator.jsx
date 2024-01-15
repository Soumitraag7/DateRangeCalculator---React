import React, { useState } from 'react';

function DateRangeCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState('');

  const calculateMonthDifferenceWithDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start) || isNaN(end)) {
      setResult('Invalid date format. Please use a valid date format.');
      return;
    }

    const yearsDifference = end.getFullYear() - start.getFullYear();
    const monthsDifference = end.getMonth() - start.getMonth();
    const daysDifference = end.getDate() - start.getDate();

    const totalMonths = yearsDifference * 12 + monthsDifference;

    setResult(
      `The range between ${startDate} and ${endDate} is ${totalMonths} months and ${daysDifference} days.`
    );
  };

  return (
    <div className="drc-container">
      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button onClick={calculateMonthDifferenceWithDays}>Calculate</button>

      <p>{result}</p>
    </div>
  );
}

export default DateRangeCalculator;
