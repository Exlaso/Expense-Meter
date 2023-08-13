import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import { useEffect } from "react";

export default function Expenses(props) {
  let expenses = props.arr;


  const [selectyear, setselectedyear] = useState("2023");
  const [selectmonth, setselectmonth] = useState("1");
  const [ShowAll, setShowAll] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("year") && localStorage.getItem("month")) {
      setselectedyear(localStorage.getItem("year"));
      setselectmonth(localStorage.getItem("month"));
    } else {
      const date = new Date();
      setselectedyear(date.getFullYear());
      setselectmonth(date.getMonth()+1);
    }

    return () => {
      console.log("use effect Unmounted");
    };
  }, []);

  const Getyear = (e) => {
    setselectedyear(e);
    localStorage.setItem("year", e);
  };
  const getvalueofmonth = (e) => {
    setselectmonth(e);
    localStorage.setItem("month", e);
  };
  expenses = expenses.filter((e) => {
    if (ShowAll) {
      return true
      
    }
     return (e?.Year === selectyear && e?.Month === (selectmonth).toString());
  });
  
  return (
    <div className="cont">
      <ExpensesFilter
        getvalue={Getyear}
        getvalueofmonth={getvalueofmonth}
        selectedyear={selectyear}
        selectedmonth={selectmonth}
        ShowAll={ShowAll}
        setShowAll ={ setShowAll}
      />
      <ExpensesChart expenses={expenses} />
      {expenses.length === 0 ? (
        <div className="hr">
          <p>No Data Found</p>
        </div>
      ) : (
        expenses.map((e) => (
          <ExpenseItem
            props={e}
            key={e.id}
            delete={props.delete}
          />
        ))
      )}
    </div>
  );
}
