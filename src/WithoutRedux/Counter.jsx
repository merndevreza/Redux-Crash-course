import Button from "./Button";
import Count from "./Count";

const Counter = ({value,onIncrement,onDecrement}) => {
  return (
    <div className="bg-green-200 m-5 w-[400px] text-center space-y-3 p-4 rounded mx-auto">
      <Count value={value}/>
      <div>
        <Button handler={onIncrement} type="increment">Increment</Button>
        <Button handler={onDecrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
