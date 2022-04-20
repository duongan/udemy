import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const { items = [] } = props;

    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilter={filterChangeHandler}
                selected={filteredYear}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
