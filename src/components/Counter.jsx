import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/features/counterSlice";
import "./Counter.css"; // Import the CSS file

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <div className="counter-card">
                <h2 className="counter-title">Redux Counter</h2>

                <div className="counter-display">
                    <span className="count-value">{count}</span>
                </div>

                <div className="button-group">
                    <button
                        className="btn btn-decrement"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>

                    <button
                        className="btn btn-reset"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>

                    <button
                        className="btn btn-increment"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;