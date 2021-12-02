import logo from './logo.svg';
import './App.css';
import  ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      
      <ItemListContainer productos="MIS PRODUCTOS" />
    </div>
  );
  
}

export default App;