import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/countersSlice";
import Counter from "../components/Counter";
import TotalCount from "../components/TotalCount";

const Container2 = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCountValue = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
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

export default Container2;
