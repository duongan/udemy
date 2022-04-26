import { useState, useEffect } from 'react';

import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/use-http';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const mealsUrl =
    'https://react-http-3b4e8-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json';

const AvailabelMeals = () => {
    const { sendHttpRequest, isLoading, httpError } = useHttp();

    const [availableMeals, setAvailableMeals] = useState([]);

    useEffect(() => {
        const transformReceivedData = (data) => {
            const meals = [];
            for (const key in data) {
                meals.push({
                    id: key,
                    name: data[key].name,
                    desciption: data[key].desciption,
                    price: data[key].price,
                });
            }
            console.log(meals);
            setAvailableMeals(meals);
        };
        sendHttpRequest({ url: mealsUrl }, transformReceivedData);

        return () => {
            console.log('CLEAN UP!!!');
        };
    }, [sendHttpRequest]);

    if (isLoading) {
        return (
            <section className={classes['meals-loading']}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        console.log(httpError.toString());
        return (
            <section className={classes['meals-error']}>
                <p>{httpError.message}</p>
            </section>
        );
    }

    const mealsList = availableMeals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailabelMeals;
