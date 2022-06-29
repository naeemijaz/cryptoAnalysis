import React from 'react'
import { Helmet } from 'react-helmet'

export default function ChartThree() {
  return (
    <>
    <Helmet>
        <script src="https://widgets.coingecko.com/coingecko-coin-heatmap-widget.js"></script>
    </Helmet>
    <coingecko-coin-heatmap-widget  height="550" locale="en"  top="50"></coingecko-coin-heatmap-widget>
    </>
  )
}
