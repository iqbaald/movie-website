import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie in Aja</h1>
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title"></div>
            <img className="Movie-image" />
            <div className="Movie-date"></div>
            <div className="Movie-rate"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
