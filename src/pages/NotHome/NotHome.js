import React, { useState, useEffect } from 'react';

const NotHome = () => {
    const [counter, set] = useState(0);
    const [message, setMessage] = useState('');

    const increase = () => {
        set(counter + 1);
    };

    const decrease = () => {
        set(counter - 1);
    };

    useEffect(() => {
        if (counter < 0) {
            set(0);
        }

        if (counter > 5) {
            setMessage("You passed 5!");
        }
        else {
            setMessage("");
        }
    }, [counter]);

    return (
        <div>
            <h2>Not Home Page</h2>
            <p>Counter: {counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NotHome;