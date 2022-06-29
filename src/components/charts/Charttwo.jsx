import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
export default function Charttwo() {
  return (
    <>
    <AdvancedRealTimeChart 

      width="100%"
      height="550px"
      symbol="BTCUSDT"
      interval="D"
      timezone="Etc/UTC"
      theme="dark"
      style="1"
      locale="in"
      toolbar_bg="#f1f3f6"
      enable_publishing="false"
      hide_side_toolbar="false"
      allow_symbol_change="true"
      container_id="tradingview"

    ></AdvancedRealTimeChart>
    </>
  )
}
