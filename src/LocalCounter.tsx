import { useState } from 'react';
import { useConfig } from './config/useConfig.ts';
import { displayCount } from './utils/index.ts';

export const INITIAL_COUNT = 1;

export const LocalCounter = () => {
  const { config } = useConfig();
  const [count, setCount] = useState(INITIAL_COUNT);

  return (
    <div className="card">
      <p>{config['local-counter-name']}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        {displayCount(count)}
      </button>
      <p>Next count: {addOne(count)}</p>
    </div>
  );
};

const addOne = (value: number) => value + 1;
