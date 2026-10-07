import { useState } from "react";
import "./App.css";

function App() {

    // Create counter state
    const [count, setCount] = useState(0);

    // Increment counter
    function increment() {
        setCount(count + 1);
    }

    // Decrement counter
    function decrement() {
        setCount(count - 1);
    }

    // Reset counter
    function reset() {
        setCount(0);
    }

    return (
        <div className="container">

            <div className="counter-box">

                <h1>React Counter App</h1>

                <div className="count">
                    {count}
                </div>

                <div className="buttons">

                    <button onClick={increment}>
                        Increment
                    </button>

                    <button onClick={decrement}>
                        Decrement
                    </button>

                    <button onClick={reset}>
                        Reset
                    </button>

                </div>

            </div>

        </div>
    );
}

export default App;