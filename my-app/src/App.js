import './App.css';
import {useWeb3React} from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector ({
  supportedChainIds: [1,4]
})

function App() {

  // user status
  const {active, account, library, connector, activate, deactivate} = useWeb3React(); 

  // wallet conection set
  async function connect() {
    try {
      await activate(injected)
    } catch (err){
      console.log(err)
    }
  }

  // wallet conection check
  async function disconnect() {
    try {
      await deactivate()
    } catch(err) {
      console.log(err)
    }
  }

  // wallet amount
  async function getBalance(wallet) {
    try {
      library.eth.getBalance(wallet).then(walletBalance => console.log(walletBalance))
    } catch(err) {
      console.log(err)
    }
  }

  // front
  return (
    <>
      <div className='Header'>
        {console.log({active, account, library, connector})}
        <div className='balance__left'>
          {activate && <button onClick={() => getBalance(account)}>get Balance</button>}
        </div>
        <div className='button__right'>
          <button onClick={connect}>Connect</button>
          <button className='button__disconnect' onClick={disconnect}>Disconnect</button>
        </div>
      </div>
      <div className='main__body'>
        <p>{active ? account : 'disconnect'}</p>
      </div>
    </>
  );
}

export default App;
