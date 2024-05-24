import "./App.css";
import Loading from "./components/Loading.jsx";
import Home from "./components/Home.jsx";

function App() {
  

  return (
    <>
      <div className="relative bg-zinc-900">
        <div className="absolute flex flex-col bg-zinc-900 w-full h-fit items-center">
          <Home />
        </div>
        <Loading className='bg-zinc-900 absolute' color={"#b54400"} />
      </div>
    </>
  );
}

export default App;