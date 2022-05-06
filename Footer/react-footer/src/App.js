
import './App.css';
import { Footer } from './Components/Footer'
import {AccountInfo} from './Account Info/AccountInfo'
import InpSearch from './SearchInput/InpSearch'

function App() {
  return (
    <>
    <div className="App">
      <InpSearch />
     <Footer />
    </div>
    <div>
       <AccountInfo />
     </div>
    </>

    
  );
}

export default App;
