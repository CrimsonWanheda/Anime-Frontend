import './App.css';
import Header from './components/Header.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header/>
        </Router>
      </header>
    </div>
  );
}

export default App;