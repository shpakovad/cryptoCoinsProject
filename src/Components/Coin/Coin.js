import React from 'react';
import style from './Coin.module.css'
import {NavLink} from 'react-router-dom'

const Coin = (props)=>   {


        let classForChange24 = props.change24 >= 0 ? `${style.changeUpper}` : `${style.changeLow}`;

        let classForchange1 = props.change1 >= 0 ? `${style.changeUpper}` : `${style.changeLow}`;

        let classForchangeWeek = props.changeWeek >= 0 ? `${style.changeUpper}` : `${style.changeLow}`;

        return (

            <div className={style.coin}>
                <div className={style.coinImg}><img src={props.image} alt=''/></div>
          <NavLink className={style.name} to={`/details/${props.id}`}>{props.name}</NavLink>
                <div className={style.price}> {props.price.toFixed(3)}$</div>
                <span className={classForchange1}>{props.change1.toFixed(2)}% </span>
                <span className={classForChange24}>{props.change24.toFixed(2)}%</span>
                <span className={classForchangeWeek}>{props.changeWeek.toFixed(2)}%</span>
            </div>

        );
    };


export default Coin;
