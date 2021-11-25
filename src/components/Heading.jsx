import React from 'react'
import { useState, useEffect } from 'react'
import { key } from '../config'
import axios from 'axios'

export default function Heading(props) {
   console.log("maj");
   const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${props.coinId === "" ? "1" : props.coinId}`,
      headers: {
         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
         'x-rapidapi-key': key.apiKey
      }
   }
   const [getCoin, setGetCoin] = useState([])
   useEffect(() => {
      axios
         .request(options)
         .then((res) => {
            setGetCoin(res.data.data.coin)
         })
         .catch((err) => console.error(err))
   }, [props])

   return (
      <header>
         <div className="title">
            <img src={getCoin.iconUrl} alt="Coin logo" />
            <h1>
               {getCoin.name} - {getCoin.symbol}
            </h1>
         </div>
         <div className="heading-col">
            <p>Rank</p>
            <span>#{getCoin.rank}</span>
         </div>
         <div className="heading-col">
            <p>Current price</p>
            <span>${getCoin.price ? Math.round(getCoin.price).toLocaleString() : ""}</span>
         </div>
         <div className="heading-col">
            <p>Market Cap</p>
            <span>${getCoin.marketCap ? getCoin.marketCap.toLocaleString() : ""}</span>
         </div>
         <div className="heading-col">
            <p>Total supply</p>
            <span>{getCoin.totalSupply ? getCoin.totalSupply.toLocaleString() : ""} {getCoin.symbol}</span>
         </div>
      </header>
   )
}
