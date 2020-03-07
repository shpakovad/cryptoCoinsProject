import React from "react";
import style from "./Table.module.css";


const Table = (props) => {

    return (

        <div className={style.wrapperParcentage}>
            <div className={style.changes}>
                <div className={style.percentageChange}> 1h</div>
                <div className={style.percentageChange}> 24h</div>
                <div className={style.percentageChange}> 7d</div>
                <div className={style.percentageChange}>30d</div>
                <div className={style.percentageChange}> 60d</div>
                <div className={style.percentageChange}> 200d</div>
                <div className={style.percentageChange}> 1y</div>
            </div>
            <div className={style.changes}>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
                </div>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_7d.toFixed(2)}%
                </div>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </div>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </div>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_200d.toFixed(2)} %
                </div>
                <div
                    className={style.percentageChange}> {props.coin.market_data.price_change_percentage_1y.toFixed(2)}%
                </div>
            </div>
        </div>

    );
};

export default Table;



