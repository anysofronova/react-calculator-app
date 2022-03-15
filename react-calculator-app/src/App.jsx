import "./style.scss";

function App() {
  return (
    <div className="calculator__grid">
      <div className="calculator__container">
        <div className="calculator__output">
          <div className="calculator__previous"></div>
          <div className="calculator__current"></div>
        </div>
        <button className="calculator__span-two">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="calculator__span-two">=</button>
      </div>
    </div>
  );
}

export default App;
