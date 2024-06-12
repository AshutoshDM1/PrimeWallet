import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="main h-screen w-full bg-gray-700 flex justify-center items-center  ">
        <div className="home h-90h w-90w bg-white rounded-20r overflow-hidden">
          <NavBar />
        </div>  
      </div>
    </>
  );
}

export default App;
