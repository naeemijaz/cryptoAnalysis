import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
export default function Charttwo() {
  return (
    <>
    <AdvancedRealTimeChart 

        width="1110"
        height="575"
        symbol= "NASDAQ:AAPL"
        interval="D"
        timezone="Etc/UTC"
        theme="light"
        style="1"
        locale="en"
        toolbar_bg="#f1f3f6"
        enable_publishing="false"
        allow_symbol_change="true"
        container_id="tradingview_4585b"

    ></AdvancedRealTimeChart>
    </>
  )
}
