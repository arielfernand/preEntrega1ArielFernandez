
import './App.css'
import { Header } from './componentes/Header/Header'
import ItemListConteiner from './componentes/ItemListConteiner/itemListConteiner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  return (

    
  <div>
    <Header />
    <ItemListConteiner saludo={"Hola waches!"}/>

    <Button variant ="warning">Click me</Button>

    <button className="btn btn-primary mx-4">Click me</button>
    <button className="btn btn-success">Click me</button>

    <img src="/public/logo.png" alt="El logo" />
    
  </div>
      
      
    
  )
}

export default App
