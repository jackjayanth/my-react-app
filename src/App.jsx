import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Myposts from "./components/Myposts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Myposts />
        {/* <Posts></Posts> */}
      </div>
    </div>
  );
}

export default App;
