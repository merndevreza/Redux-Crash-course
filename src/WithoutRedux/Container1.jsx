import { useState } from "react";
import Counter from "./Counter";
import TotalCount from "./TotalCount";
const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
const Container1 = () => {
  const [counters, setCounters] = useState(initialCounters);
  const totalCountValue = counters.reduce(
    (sum, current) => sum + current.value,
    0
  );

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counterId === counter.id) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      } else {
        return counter;
      }
    });
    setCounters(updatedCounters);
  };
  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counterId === counter.id) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      } else {
        return counter;
      }
    });
    setCounters(updatedCounters);
  };
  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          value={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <TotalCount totalCountValue={totalCountValue} />
    </div>
  );
};

export default Container1;
