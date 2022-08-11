import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
import React from "react";
function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default App;
