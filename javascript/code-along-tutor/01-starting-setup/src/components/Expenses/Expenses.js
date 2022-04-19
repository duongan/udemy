import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');
	const { items = [] } = props;

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				onFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			{items.map((item) => (
				<ExpenseItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				></ExpenseItem>
			))}
		</Card>
	);
}

export default Expenses;
