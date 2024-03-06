import Container2 from "./WithRedux/Container2";
import Posts from "./WithRedux/Posts";
import Container1 from "./WithoutRedux/Container1";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center py-4 bg-green-300">
        React Redux Crash Course
      </h1>
      <p className="text-center py-4 mt-5 bg-red-200 text-xl">Without Redux</p>
      <Container1 />
      <p className="text-center py-4 mt-5 bg-red-200 text-xl">With Redux</p>
      <Container2 />
      <Posts/>
    </>
  );
}

export default App;
