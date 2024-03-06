const TotalCount = ({ totalCountValue }) => {
  return (
    <div className="bg-green-200 m-5 w-[400px] text-center space-y-3 p-4 rounded mx-auto">
      <h2 className="text-2xl">Total Count: {totalCountValue} </h2>
    </div>
  );
};

export default TotalCount;
