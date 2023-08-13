import { useState } from "react";
import "./Expenseform.css";
import { CreateItems } from "../../../api/CreateItems";
import { toast } from "react-toastify";
const Expenseform = (props) => {
  const [enteredtitle, settitle] = useState("");
  const [enteredAmount, setamount] = useState("");
  const [enteredDate, setdate] = useState("");

  const TitlechangeHandler = (event) => {
    settitle(event.target.value);
  };
  const AmountchangeHandler = (event) => {
    setamount(event.target.value);
  };
  const DatechangeHandler = (event) => {
    setdate(event.target.value);
  };

  const submithandler = async (e) => {
    e.preventDefault();
    setformvisiblity("0");
    // const expenseData = {
    //   name: enteredtitle,
    //   date: new Date(enteredDate),
    //   price: enteredAmount,
    // };
    const MyDate =new Date( enteredDate)
    const Returndata= await toast.promise(
      CreateItems({
        User_id: "001",
        Expense_amount: parseInt(enteredAmount),
        Year: MyDate.getFullYear().toString(),
        Month: (MyDate.getMonth()+1).toString(),
        Day: MyDate.getDate().toString(),
        Expense_title: enteredtitle,
        
      }),
      {
        pending: 'Item Uploading',
        success: 'Item Added 👌',
        error: 'Something Went Wrong 🤯'
      }
  )

    props.getvalue(...Returndata);

    setamount("");
    setdate("");
    settitle(""); 
  };
  const [formvisiblity, setformvisiblity] = useState("0");
  return (
    <div className="text-black">
      {formvisiblity === "0" ? (
        <button
          className="text-sm text-black btn"
          onClick={() => {
            setformvisiblity("1");
          }}
        >
          Add New Expense
        </button>
      ) : (
        <form onSubmit={submithandler}>
          <h1 className="py-5 text-2xl font-bold">Expense Add</h1>
          <hr className="py-5" />
          <div className="new-expense__controls">
            <div className="flex flex-col items-center justify-start w-full gap-3 p-2">
              <label>Title</label>
              <input
                className="w-full p-2 rounded-md"
                type="text"
                value={enteredtitle}
                placeholder="Packets"
                onChange={TitlechangeHandler}
                required
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-3 p-2">
              <label>Amount</label>
              <input
                className="w-full p-2 rounded-md"
                type="number"
                min="0.01"
                placeholder="102 Rs"
                step="0.01"
                value={enteredAmount}
                onChange={AmountchangeHandler}
                required
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-3 p-2">
              <label>Date</label>
              <input
                className="w-full p-2 rounded-md"
                type="date"
                min="2019-01-01"
                max="2025-12-31"
                value={enteredDate}
                onChange={DatechangeHandler}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button
              type="button"
              className="text-sm btn"
              onClick={() => {
                setformvisiblity("0");
              }}
            >
              Cancel
            </button>
          </div>
          <div className="new-expense__actions">
            <button
              type="submit"
              className="text-sm btn"
            >
              Add Expense
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Expenseform;
