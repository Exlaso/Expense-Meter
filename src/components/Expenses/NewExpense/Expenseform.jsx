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
    const Returndata= await toast.promise(
      CreateItems({
        User_id: "001",
        Expense_amount: parseInt(enteredAmount),
        Expense_date: new Date(enteredDate),
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
          className="btn text-sm text-black"
          onClick={() => {
            setformvisiblity("1");
          }}
        >
          Add New Expense
        </button>
      ) : (
        <form onSubmit={submithandler}>
          <h1 className="font-bold text-2xl py-5">Expense Add</h1>
          <hr className="py-5" />
          <div className="new-expense__controls">
            <div className="flex justify-start flex-col w-full p-2 items-center gap-3">
              <label>Title</label>
              <input
                className="p-2 w-full rounded-md"
                type="text"
                value={enteredtitle}
                placeholder="Packets"
                onChange={TitlechangeHandler}
                required
              />
            </div>
            <div className="flex justify-start flex-col w-full p-2 items-center gap-3">
              <label>Amount</label>
              <input
                className="p-2 w-full rounded-md"
                type="number"
                min="0.01"
                placeholder="102 (In dollars)"
                step="0.01"
                value={enteredAmount}
                onChange={AmountchangeHandler}
                required
              />
            </div>
            <div className="flex justify-start flex-col w-full p-2 items-center gap-3">
              <label>Date</label>
              <input
                className="p-2 w-full rounded-md"
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
              className="btn text-sm"
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
              className="btn text-sm"
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
