import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <input type="text" className="searchbar" />
      <div className="filter">Filter by Region</div>
    </div>
  );
}

export default App;
