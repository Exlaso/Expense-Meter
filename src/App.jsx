import Expenses from "./components/Expenses/Expense";
import "./App.css";
import "./output.css";
import NewExpense from "./components/Expenses/NewExpense/Newexpense";
import { useEffect, useState } from "react";
import FindItems from "./api/FindItems";
import Nav from "./components/Nav/Nav";
function App() {



  const dummyexpenses = [  ];
  const [expenses, setexpenses] = useState(dummyexpenses);
  useEffect(() => {
    FindItems(setexpenses);
    return () => {
      console.log('This will be logged on unmount');
    };
  }, []);
  useEffect(() => {
    setexpenses((e) => {
      return e.sort((a,b) => {return a.Day - b.Day})
    })
  
    return () => {
      console.log('effect');
    }
  }, [expenses])
  

  const AddexpenseHandler = (exp) => {
    setexpenses((e) => {
      return [exp, ...e];
    });
  };

  const Deletehandler = (ID) => {
    
    setexpenses((ex) => {
      const expens = ex.filter((e) => e.id !== ID);
      return expens;
    });
  };

  return (
    <div className="App ">
      <header className="py-10 App-header">
      <h1>NOTE: Anybody can add, view, and remove items. </h1>
        <NewExpense getvalue={AddexpenseHandler} />
        <Expenses
          arr={expenses}
          delete={Deletehandler}
        />
      </header>
    </div>
  );
}

export default App;
