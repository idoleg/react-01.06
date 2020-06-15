import React, { useState, useEffect } from 'react';

// { onCount, count }
export const CounterFunc = () => {
    const [count, setCount] = useState(0);

    console.log('Render is called')
    useEffect(() => {
        console.log('Component did mount')

        return () => {
            console.log('Component unmount')
        }
    }, [])
    useEffect(() => {
        console.log('Component state count did update')

        return () => {
            // console.log('Component unmount')
        }
    }, [count])

    const handleClick = (event) => {
        setCount(count + Number(event.target.value));
    };

    return (
        <>
            <button value="-10" onClick={handleClick}>Удалить 10 пунктов</button>
            <button value="-1" onClick={handleClick}>-1</button>
            <strong style={{ margin: '10px' }}>{count}</strong>
            <button value="1" onClick={handleClick}>+1</button>
            <button value="10" onClick={handleClick}>+10</button>
        </>
    );
};
