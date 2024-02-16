import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
        <Route path='/' component={HomePage} exact />
        <Route path='/list' component={ListPage} exact />
    </div>
  );
}

export default App;
