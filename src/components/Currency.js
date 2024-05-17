import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
var Currency = () => {
    let { currency, dispatch } = useContext(AppContext);

    let handleCurrencyChange = (event) =>{
        dispatch(
            {
                type: 'CHG_CURRENCY',
                payload: event.target.value
            }
        );
    };

    return (
        <div className='alert alert-primary'>
            <span>
                Currency: 
                <select className="custom-select" id="CurrencySelect04" onChange={handleCurrencyChange} 
                value={currency}>
                <option defaultValue value="$" name="$ Dollar">$ Dollar</option>
                <option defaultValue value="€" name="€ Euro">€ Euro</option>
                <option defaultValue value="£" name="£ GBP">£ GBP</option>
                <option defaultValue value="₹" name="₹ Rupee">₹ Rupee</option>
            </select></span>
        </div>
        
    );
};
export default Currency;