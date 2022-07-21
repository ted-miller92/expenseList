import React, { useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // or you could have on single state, but you have to be careful because 
    // some values may be dumped if they are not assigned (see spread operator below)
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        // for using single state
        // setUserInput({
        //     ...userInput,   // the spread operator takes in the values of an object and passes them again, can be overwritten
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // for using single state
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // for using single state
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;