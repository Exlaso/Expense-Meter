import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import DeleteItem from "../../api/DeleteItem";
function ExpenseItem(props) {

  const ItemPrice = props.props.price;

  const ClickHandler = () => {
    DeleteItem(props.props.id)
    props.delete(props.props.id);
  };
  return (
    <div>
      <div className="item  bg-[#0B2447]">
        <ExpenseDate props={props.props} />
        <div className="item-inner">
          <div>
            <h2>{props.props.name}</h2>
          </div>

          <div className="grid gap-1">
            <div className="text-2xl">
              <h2>{ItemPrice} ₨</h2>
            </div>
            <button
              className="flex items-center justify-center p-1 rounded-md bg-slate-600"
              onClick={ClickHandler}
            >
              <img src="/Trash.svg" alt="Delete"  className="w-7"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
