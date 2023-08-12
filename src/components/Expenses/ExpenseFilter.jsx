import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const SelectYear = (e) => {
    props.getvalue(e.target.value)
}

  const SelectMonth = (e) => {
    props.getvalueofmonth(e.target.value)
}

  return (
    <div className='expenses-filter flex'>
      <div className='expenses-filter__control text-black flex flex-col '>
        <label className='text-white'>Filter by year</label>
        <select value={ props.selectedyear} onChange={SelectYear}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <div className='expenses-filter__control text-black flex flex-col '>
        <label className='text-white'>Filter by Month</label>
        <select value={ props.selectedmonth} onChange={SelectMonth}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;