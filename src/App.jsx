import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5">Hello, Bootstrap!</h1>
        <button className="btn btn-primary">Click Me</button>
        <Posts></Posts>
      </div>
    </div>
  );
}

export default App;
