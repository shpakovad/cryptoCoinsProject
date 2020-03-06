import React from "react";
import style from "./Currency.module.css"
import next from "../../../assets/images/next.svg";
import back from "../../../assets/images/back.svg"

const Currency = (props) => {

    return (

        <div>
            <div className={style.titleCurrency}> Currency exchange :</div>
            <div className={style.converter}>
                <span className={style.nameSpan}>{props.name} </span>
                {props.disabledUsd ? <>
                        <input type='number' disabled={props.disabledCoin}
                               onChange={props.handleInputCoin}/>
                        <span className={style.nameSpan}>USD</span>
                        <input className={style.inputChange} type='number' disabled={props.disabledUsd}
                               value={props.amountUsd}/>
                    </> :
                    <>
                        <input className={style.inputChange} type='number'
                               disabled={props.disabledCoin}
                               value={props.amountCoin}/>
                        <span className={style.nameSpan}>USD</span>
                        <input type='number' disabled={props.disabledUsd}
                               onChange={props.handleInputUsd}/>
                    </>
                }

                <div className={style.swapRight} onClick={props.activeUsdInput}><img
                    className={style.arrowsChange} src={next} alt=""/></div>
                <div className={style.swapLeft} onClick={props.activeCoinInput}><img
                    className={style.arrowsChange} src={back} alt=""/></div>
            </div>

        </div>
    );
};


export default Currency;



