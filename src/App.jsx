import "./App.css";
import Loading from "./components/Loading.jsx";

function App() {
  return (
    <>
      <div className="relative bg-zinc-900">
        <div className="absolute w-full h-fit">
          <h1 className="text-white">Home Page</h1>
        </div>
        <Loading className='bg-zinc-900 absolute' color={"#b54400"} />
      </div>
    </>
  );
}

export default App;
