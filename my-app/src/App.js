import './App.css';
import {useWeb3React} from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1,4]
})

function App() {

  const {active, account, library, connector, activate, deactivate} = useWeb3React(); 

  async function connect() {
    try {
      await activate(injected)
    } catch (err){
      console.log(err)
    }
  }

  async function disconnect() {
    try {
      await deactivate()
    } catch(err) {
      console.log(err)
    }
  }

  async function getBalance(wallet) {
    try {
      library.eth.getBalance(wallet).then(walletBalance => console.log(walletBalance))
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      {console.log({active, account, library, connector})}
      <button onClick={connect}>connect to wallet</button>
      <p>{active ? account : 'disconnect'}</p>
      <button onClick={disconnect}>disconnect</button>
      {activate && <button onClick={() => getBalance(account)}>getBalance</button>}
    </>
  );
}

export default App;
