import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import MainRoute from './Routes/MainRoute';
import { Control } from './components/Styled';

function App() {
  return (
    

      <Control>
      <Dashboard/>
      <MainRoute/>
      </Control>
    
  );
}

export default App;
