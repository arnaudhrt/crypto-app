import Main from "./components/Main";
import Nav from "./components/Nav";
import {useState} from 'react'

function App() {

  const [coinId, setCoinId] = useState("")
  const getCoinId = (id) => {
    setCoinId(id)
  }
  return (
    <div className="app">
      <Nav getCoinId={getCoinId}/>
      <Main coinId={coinId}/>
    </div>
  );
}

export default App;
