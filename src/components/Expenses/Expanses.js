import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
function Expanses(props) {
    const [filteredYear, setFilteredYear] =useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpenseItem
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.item[1].title}
                amount={props.item[1].amount}
                date={props.item[1].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.item[2].title}
                amount={props.item[2].amount}
                date={props.item[2].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.item[3].title}
                amount={props.item[3].amount}
                date={props.item[3].date}
            ></ExpenseItem>
            </div>
    )
}

export default Expanses;
