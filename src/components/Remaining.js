import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import Currency from './Currency';
var Remaining = () => {
    let { expenses, budget, currency } = useContext(AppContext);
    let totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    let alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
