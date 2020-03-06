import React, {Component} from "react";
import { Redirect, Route, Switch, withRouter} from "react-router-dom";
import {
    addUniqueCoinTh,
    changeActivityInputAC,
    handleInputCoinAC,
    handleInputUsdAC
} from "../../redux/reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import style from "./CoinsName.module.css";
import Chart from "./Chart/Chart";
import preloader from "../../assets/images/preloader.svg";
import NotFound from "../NotFound/NotFound";
import Table from "./Table/Table";
import Currency from "./Currency/Currency";


class CoinsName extends Component {

    componentDidMount() {
        this.props.addUnique(this.props.match.params.id);
    }

    handleInputCoin = (e) => {
        this.props.handleInputCoin(e.target.value * this.props.coin.market_data.current_price.usd)
    };

    handleInputUsd = (e) => {
        this.props.handleInputUsd(e.target.value / this.props.coin.market_data.current_price.usd)
    };

    activeUsdInput = () => {
        this.props.changeActivityInput(false, true)
    };

    activeCoinInput = () => {
        this.props.changeActivityInput(true, false)
    };


    render() {

        return (

            <>{this.props.error
                ?
                <Switch>
                    <Route path="/not_found" component={NotFound}/>
                    <Redirect to="/not_found"/>
                </Switch>
                :

                <div className={style.coinsName}>
                    {!this.props.coin && <img className={style.preloader} src={preloader} alt=""/>}

                    {this.props.coin && <> <img className={style.nameImg} src={this.props.coin.image.small} alt=''/>
                        <div className={style.wrapperDescriptionCoin}>
                            <span className={style.name}>{this.props.coin.name}</span>
                            <span
                                className={style.price}> {this.props.coin.market_data.current_price.usd.toFixed(6)}$ </span>
                        </div>
                        {this.props.coin.genesis_date === null ?
                            <div className={style.genesisDate}> Date of creation : unknown </div> :
                            <div className={style.genesisDate}> Date of creation
                                : {this.props.coin.genesis_date}  </div>}

                        <Table coin={this.props.coin}/>

                        <Currency {...this.props} name={this.props.coin.name}
                                  handleInputCoin={this.handleInputCoin}
                                  handleInputUsd={this.handleInputUsd}
                                  activeUsdInput={this.activeUsdInput}
                                  activeCoinInput={this.activeCoinInput}
                        />
                        <Chart coin={this.props.coin}/>
                    </>}
                </div>
            }</>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        coin: state.coin,
        amountUsd: state.amountUsd,
        amountCoin: state.amountCoin,
        disabledUsd: state.disabledUsd,
        disabledCoin: state.disabledCoin,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUnique(id) {
            dispatch(addUniqueCoinTh(id))
        },
        handleInputCoin(amountUsd) {
            dispatch(handleInputCoinAC(amountUsd))
        },
        handleInputUsd(amountCoin) {
            dispatch(handleInputUsdAC(amountCoin))
        },
        changeActivityInput(disabledUsd, disabledCoin) {
            dispatch(changeActivityInputAC(disabledUsd, disabledCoin))
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(CoinsName);



