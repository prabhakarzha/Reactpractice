import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import { render } from "react-dom";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}

      {/* <FunctionClick />
      <ClassClick/> */}

      {/* <Counter/> */}

      {/* <Greet name="Ram" heroname ="Batman">
        <p>This is children props</p>
        </Greet>
      <Greet name="Shyam" heroname ="Superman">
        <button>action</button>
        </Greet>
      <Greet name="Sita" heroname ="Wonder"/>  */}
      {/* <Welcome/> */}
      {/*<Hello />  */}
    </div>
  );
}

export default App;
