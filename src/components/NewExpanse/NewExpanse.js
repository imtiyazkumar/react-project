// import react from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpanse = (props) => {

    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 5
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);

    }

    return (
        <div className='new-expense'>
            <div>Add new expense form</div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
       </div>
        );
}

export default NewExpanse ;