import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

export default function ChartCrypto(props) {
   // API CALL
   const [getDataCoin, setGetDataCoin] = useState([])
   const [getTime, setGetTime] = useState("5y")
   const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${props.coinId === '' ? '1' : props.coinId}/history/${getTime}`,
      headers: {
         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
         'x-rapidapi-key': '85e41a5d31mshb460731cff03989p1f7e05jsn23d731d84e8a'
      }
   }
   useEffect(() => {
      axios
         .request(options)
         .then((res) => {
            setGetDataCoin(res.data.data.history)
         })
         .catch((err) => console.error(err))
   }, [props, getTime])

   // GET PRICE AND TIME FOR EACH COIN
   const coinPrice = []
   const coinTimestamp = []
   function dateParser(date) {
      let newDate = new Date(date).toLocaleDateString('en-EN', {
         year: 'numeric',
         month: 'short',
         day: 'numeric'
      })
      return newDate
   }

   for (let i = 0; i < getDataCoin.length; i++) {
      coinPrice.push(getDataCoin[i].price)
   }

   for (let i = 0; i < getDataCoin.length; i++) {
      coinTimestamp.push(dateParser(getDataCoin[i].timestamp))
   }

   // DISPLAY CHART

   const dataChart = {
      labels: coinTimestamp,
      datasets: [
         {
            data: coinPrice,
            borderColor: '#42a5ff',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.01,
            spanGaps: true
         }
      ]
   }

   const optionsChart = {
      responsive: true,
      scales: {
         y: {
            position: 'right',
            grid: {
               boderWidth: 1,
               color: '#333',
               borderColor: '#333',
               drawTicks: false
            },
            ticks: {
               maxTicksLimit: 12,
               padding: 14,
               color: '#42a5ff',
               callback: function (value, index, values) {
                  return '$' + ' ' + value.toLocaleString()
               }
            }
         },
         x: {
            grid: {
               boderWidth: 1,
               color: '#333',
               drawTicks: false
            },
            ticks: {
               maxTicksLimit: 20,
               padding: 14,
               color: 'rgb(186,186,186)'
            }
         }
      },
      plugins: {
         legend: {
            display: false
         }
      }
   }

   // CHANGE TIME RANGE

   console.log(getTime);
   return (
      <div className="chart-wp">
         <div className="select-input">
            <label for="rangeTime">In last :</label>
            <select id="rangeTime" value={getTime} onChange={(e) => setGetTime(e.target.value)}>
               <option value="24h">24 hours</option>
               <option value="7d">7 days</option>
               <option value="30d">30 days</option>
               <option value="1y">1 years</option>
               <option value="5y" selected>5 year</option>
            </select>
         </div>
         <Line data={dataChart} options={optionsChart} />
      </div>
   )
}
