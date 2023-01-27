import reactLogo from './assets/react.svg';
import './App.css';
import { ContactForm } from './ContactForm';

export const App = () => {
  return (
    <div className="App">
      <ContactForm />

      <h3>Made with:</h3>
      <div>
        <a className="logo-link" href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" title="Vite" />
          Vite
        </a>

        <a className="logo-link" href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            title="React"
          />
          React
        </a>
      </div>
    </div>
  );
};
