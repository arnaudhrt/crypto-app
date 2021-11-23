import React from 'react'
import Logo from '../images/logo.svg'

export default function Nav() {
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
            <input placeholder={'Search Coin'} onChange={(e) => {}} />
         </div>
         <div className="coins-list">
            <div className="coin-wp">
               <div className="divider"></div>
               <div className="coin-info">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg" alt="" />
                  <h2>Bitcoin</h2>
                  <span>BTC</span>
               </div>
               <div className="divider"></div>
            </div>
         </div>
      </nav>
   )
}
