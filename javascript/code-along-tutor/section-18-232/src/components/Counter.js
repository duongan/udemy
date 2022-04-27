import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const showCounter = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        // dispatch({ type: 'increment' });
        dispatch(counterActions.increment());
    };

    const increaseHanlder = () => {
        // dispatch({ type: 'increase', paceValue: 5 });
        dispatch(counterActions.increase(5));
    };

    const decrementHandler = () => {
        // dispatch({ type: 'decrement' });
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        // dispatch({ type: 'toggle' });
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button type="button" onClick={incrementHandler}>
                    Increment
                </button>
                <button type="button" onClick={increaseHanlder}>
                    Increase by 5
                </button>
                <button type="button" onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

/*
** For Class-based Component
**
import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';

class Counter extends Component {
    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    toggleCounterHandler() {}

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button
                        type="button"
                        onClick={this.incrementHandler.bind(this)}
                    >
                        Increment
                    </button>
                    <button
                        type="button"
                        onClick={this.decrementHandler.bind(this)}
                    >
                        Decrement
                    </button>
                </div>
                <button onClick={this.toggleCounterHandler}>
                    Toggle Counter
                </button>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
