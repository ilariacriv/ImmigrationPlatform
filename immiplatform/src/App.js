
import './App.css';
import NavigationBar from './components/NavigationBar';


function Header() {
  return (
    <header>
      <h1>Header with logo</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
    </div> 
  );
}

export default App;
