import React from "react";
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import style from "./Chart.module.css";


const Chart = (props) => {

    let data = [
        {
            name: "1y",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_1y / 100 + 1),
        },
        {
            name: "200d",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_200d / 100 + 1),
        },
        {
            name: "60d",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_60d / 100 + 1),
        },
        {
            name: "30d",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_30d / 100 + 1),
        },
        {
            name: "7d",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_7d / 100 + 1),
        },
        {
            name: "24h",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_24h / 100 + 1),
        },
        {
            name: "1h",
            uv: props.coin.market_data.current_price.usd / (props.coin.market_data.price_change_percentage_1h_in_currency.usd / 100 + 1),
        },
        {
            name: "current", uv: props.coin.market_data.current_price.usd,
        },

    ];

    return (
        <div className={style.wrapperChart}>

            <AreaChart
                width={700}
                height={300}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#FB5252"/>
            </AreaChart>

        </div>
    );
};


export default (Chart);

