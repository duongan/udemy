import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
	const { items = [] } = props;
	return (
		<Card className="expenses">
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
