import React from 'react'

export default function Heading() {
   return (
      <header>
         <div className="title">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg" alt="Coin logo" />
            <h1>Bitcoin - BTC</h1>
         </div>
         <div className="heading-col">
            <p>Rank</p>
            <span>#1</span>
         </div>
         <div className="heading-col">
            <p>Current price</p>
            <span>$57,269.58</span>
         </div>
         <div className="heading-col">
            <p>All times hight</p>
            <span>$68,789.63</span>
         </div>
         <div className="heading-col">
            <p>Total supply</p>
            <span>18,881,362 BTC</span>
         </div>
      </header>
   )
}
