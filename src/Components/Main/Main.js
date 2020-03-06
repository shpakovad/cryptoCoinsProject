import React from 'react';
import style from './Main.module.css'
import Coin from '../Coin/Coin';
import sort_up from '../../assets/images/sort-up.svg';
import sort_down from '../../assets/images/sort-down.svg';


const Main = (props) => {


        let coinsElements = props.coins.map((coin) => {
            return <Coin key={coin.id} id={coin.id} name={coin.name} image={coin.image} price={coin.current_price}
                         change24={coin.price_change_percentage_24h_in_currency}
                         change1={coin.price_change_percentage_1h_in_currency}
                         changeWeek={coin.price_change_percentage_7d_in_currency}/>
        });

        return (
            <div>
                <div className={style.main}>
                    <div className={style.header}>
                        <div className={style.titleWrapper}> Icon</div>

                        <div className={style.titleWrapper}> Coin<span className={style.wrapperArrows}> <img className={style.arrowStyle} alt='' src={sort_up} onClick={() => {props.sortCoins('asc', 'coin')}} />
                            <img className={style.arrowStyle} alt='' src={sort_down} onClick={() => {props.sortCoins('desc', 'coin')}} /> </span>
                    </div>

                        <div className={style.titleWrapper}> Price USD <span className={style.wrapperArrows}> <img className={style.arrowStyle} alt='' src={sort_up} onClick={() => {props.sortCoins('asc', 'price')}} />
                            <img className={style.arrowStyle} alt='' src={sort_down} onClick={() => {props.sortCoins('desc', 'price')}} /> </span>
                        </div>

                        <div className={style.titleWrapper}> 1 hour <span className={style.wrapperArrows}> <img className={style.arrowStyle} alt='' src={sort_up} onClick={() => {props.sortCoins('asc', 'change1')}} />
                            <img className={style.arrowStyle} alt='' src={sort_down} onClick={() => {props.sortCoins('desc', 'change1')}} /> </span>
                        </div>

                        <div className={style.titleWrapper}> 24 hour <span className={style.wrapperArrows}> <img className={style.arrowStyle} alt='' src={sort_up} onClick={() => {props.sortCoins('asc', 'change24')}} />
                            <img className={style.arrowStyle} alt='' src={sort_down} onClick={() => {props.sortCoins('desc', 'change24')}} /> </span>
                        </div>

                        <div className={style.titleWrapper}> week <span className={style.wrapperArrows}> <img className={style.arrowStyle} alt='' src={sort_up} onClick={() => {props.sortCoins('asc', 'changeWeek')}} />
                            <img className={style.arrowStyle} alt='' src={sort_down} onClick={() => {props.sortCoins('desc', 'changeWeek')}} /> </span>
                        </div>

                    </div>
                    {coinsElements}
                </div>
            </div>
        );
    }


export default Main;
