// A component in React is JUST a JavaScript function
import React, { useState } from 'react';
import './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    // useState always returns an array with two values
    // first value is the current value
    // second value is the updated value
    const [title, setTitle] = useState(props.title);
    
    // let title = props.title;

    const clickHandler = () =>{
        setTitle('Updated!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            {/* <div>{props.date.toISOString()}</div> */}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>      
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;