import "./App.css";
import ButtonArea from "./components/ButtonArea";
import Display from "./components/Display";

const App = () => {
  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="calculator">
        <Display />
        <div className="btn-area">
          <ButtonArea />
        </div>
      </div>
    </div>
  );
};

export default App;
