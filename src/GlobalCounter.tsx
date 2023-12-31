import { useConfig } from './config/useConfig.ts';
import { useCounter } from './CounterProvider/CounterProvider';
import { double, displayCount } from './utils/index.ts';

export const GlobalCounter = () => {
  const { config } = useConfig();
  const { count, setCount } = useCounter();

  return (
    <div className="card">
      <p>{config['global-counter-name']}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        {displayCount(count)}
      </button>
      <p>Double is {double(count)}</p>
    </div>
  );
};
