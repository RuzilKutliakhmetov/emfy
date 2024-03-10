import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <script
        className="amocrm_oauth"
        data-client-id="b4415501-f3d5-45b7-992c-4ff08f29b5f8"
        data-title="Button"
        data-compact="false"
        data-class-name="className"
        data-color="default"
        data-state="state"
        data-error-callback="functionName"
        data-mode="popup"
        src="https://www.amocrm.ru/auth/button.min.js"
      ></script>
    </div>
  );
}

export default App;
