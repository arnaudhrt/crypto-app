import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../images/logo.svg'
import axios from 'axios'

export default function Nav(props) {
   const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins?limit=100',
      headers: {
         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
         'x-rapidapi-key': '85e41a5d31mshb460731cff03989p1f7e05jsn23d731d84e8a'
      }
   }
   const [allCoins, setAllCoins] = useState([])
   const [searchCoin, setSearchCoin] = useState("")

   useEffect(() => {
      axios
         .request(options)
         .then((res) => setAllCoins(res.data.data.coins))
         .catch((err) => console.error(err))
   }, [])
   return (
      <nav className="nav-left-wp">
         <div className="heading">
            <img src={Logo} alt="logo app" />
            <h1>Today's Cryptocurrency Prices by Market Cap</h1>
            <p>
               Data is from <a href="https://coinranking.com">Coinranking API</a>
            </p>
         </div>
         <div className="search-bar">
            <input value={searchCoin} placeholder={'Search Coin'} onChange={(e) => {setSearchCoin(e.target.value)}} />
         </div>
         <div className="coins-list">
            <div className="coin-wp">
               {allCoins.filter(el => {
                  if(searchCoin === "") {
                     return el 
                  } else if (el.name.toLowerCase().includes(searchCoin.toLocaleLowerCase())){
                     return el
                  } else if (el.symbol.toLowerCase().includes(searchCoin.toLocaleLowerCase())){
                     return el
                  }
               }).map((el) => (
                  <div className="coin-row">
                     <div className="divider"></div>
                     <div className="coin-info" onClick={() => props.getCoinId(el.id) }>
                        <img src={el.iconUrl} alt="" />
                        <h2>{el.name}</h2>
                        <span>{el.symbol}</span>
                     </div>
                  </div>
               ))}
               <div className="divider"></div>
            </div>
         </div>
      </nav>
   )
}


// 