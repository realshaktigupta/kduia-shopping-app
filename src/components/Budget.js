import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

var Budget = () => {
    let { budget, dispatch, expenses, currency } = useContext(AppContext);
    //let [newBudget, setNewBudget] = useState(budget);
    let oldbudget = {budget};
    let totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    let handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("Budget Cannot Exceed 20000 £");
            dispatch(
                {
                    type: 'SET_BUDGET',
                    payload:oldbudget
                }
            );
        }
        else if(event.target.value < totalExpenses){
            alert("Budget Cannot be less than total Expenses",+totalExpenses);
            dispatch(
                {
                    type: 'SET_BUDGET',
                    payload:oldbudget
                }
            );
        }
        else{
            dispatch(
                {
                    type: 'SET_BUDGET',
                    payload:event.target.value 
                }
            );
        }
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {budget}  {currency}</span>
<div>
<span class="prefix">{currency}</span>
<input type="number" step="10" min={totalExpenses} max="20000" value={budget} onChange={handleBudgetChange}></input>
</div>
</div>
    );
};
export default Budget;
