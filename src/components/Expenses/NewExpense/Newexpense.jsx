import React from 'react';
import './Newexpense.css';
import Expenseform from './Expenseform';
const NewExpense = (props) => {
    const GetexpenseData = (ele) =>{
        const expensedata = {
            id: Math.random().toString(),
            ...ele
        }
        props.getvalue(expensedata);
}

    return <div className='new-expense'>
        <Expenseform getvalue={ GetexpenseData} />
        
    </div>
    

}
export default NewExpense;