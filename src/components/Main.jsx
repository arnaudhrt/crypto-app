import React from 'react'
import ChartCrypto from './ChartCrypto'
import Footer from './Footer'
import Heading from './Heading'

export default function Main(props) {
  return (
    <main className="main">
      <Heading coinId={props.coinId}/>
      <ChartCrypto />
      <Footer />
    </main>
  )
}
