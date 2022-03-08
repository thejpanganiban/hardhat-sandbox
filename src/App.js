import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hardhat Sandbox</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
