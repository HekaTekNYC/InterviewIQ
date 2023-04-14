import React, { useEffect, useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
     setCount(count + 1);
  };

  useEffect(() => {
    const countFromStorage = JSON.parse(window.localStorage.getItem('count'));
    setCount(countFromStorage || 0);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <h1 className='count'> Count {count}</h1>
      <button className='btn-13 btn' onClick={increaseCount}>
        Click Me!
      </button>
    </div>
  );
};

export default Counter;
