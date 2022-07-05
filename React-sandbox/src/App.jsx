import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from './components/card/card'


function App() {

  return (
    <div>
      <div style={{width: '250px', height: '450px'}}>
        <Card mainPreis='499' currectPreis='250' discount='10' cardImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmyinstagirls.com%2Fwp-content%2Fgallery%2Flana-rhoades%2F53970503_558959674616225_5043264352427029769_n.jpg&f=1&nofb=1"/>
      </div>
    </div>
  )
}

export default App
