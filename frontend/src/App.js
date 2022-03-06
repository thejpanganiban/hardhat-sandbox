import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Hardhat Sandbox</h1>
      <p>A bunch of solidity prototypes.</p>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/hello">Hello</Link> |{" "}
        <Link to="/box">Box</Link> |{" "}
        <Link to="/token">Token</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
