import React, {useState} from 'react';
import './ExpenseItem.css';


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('updated!!!!!!!!!!!')
        console.log ('clicked!!!');
    }
    
    
    const date = props.date.toDateString();

    return (
        <div className='expense-item'>
            <div>{date}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler }>Change title</button>
        </div>
    );
}

export default ExpenseItem;