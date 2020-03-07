import React, {Component} from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import CoinsName from "./Components/CoinsName/CoinsName";
import {Redirect, Route, Switch} from "react-router-dom";
import {addCoinTh, paginateAC, sortCoinsAC} from "./redux/reducer";
import {connect} from "react-redux";
import Pagination from "./Components/Pagination/Pagination";
import NotFound from "./Components/NotFound/NotFound";


class App extends Component {

    componentDidMount() {
        this.props.addCoin(this.props.coins)
    }

    addCoin = (coins) => {
        this.props.addCoin(coins)
    };

    sortCoins = (sortType, value) => {
        this.props.sortCoins(sortType, value)
    };

    paginate = (pageNumber) => {
        this.props.paginate(pageNumber)
    };


    render() {

        const indexOfLastData = this.props.currentPage * this.props.dataPerPage;
        const indexOfFirstData = indexOfLastData - this.props.dataPerPage;
        const currentData = this.props.coins.slice(indexOfFirstData, indexOfLastData);

        let sorted = currentData.sort((a, b) => {
            let isReversed = this.props.sortType === "asc" ? 1 : -1;

            switch (this.props.value) {
                case "coin" :
                    return isReversed * a.name.localeCompare(b.name);
                case "price" :
                    return isReversed * (a.current_price - b.current_price);
                case "change1" :
                    return isReversed * (a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency);
                case "change24" :
                    return isReversed * (a.price_change_percentage_24h_in_currency - b.price_change_percentage_24h_in_currency);
                case "changeWeek" :
                    return isReversed * (a.price_change_percentage_7d_in_currency - b.price_change_percentage_7d_in_currency);
            }
        });

        return (
            <div className="App">
                <div className={"wrapper"}>
                    <Switch>
                        <Route exact path="/" render={() => <Main coins={currentData} sortCoins={this.sortCoins}
                                                                  sorted={sorted}/>}/>
                        <Route path="/details/:id?" render={() => <CoinsName/>}/>
                        <Route path="*" component={NotFound}/>
                        <Redirect to="/not_found"/>
                    </Switch>
                    <Route exact path='/'
                           render={() => <div className="wrapperPaginator">
                               <Pagination  dataPerPage={this.props.dataPerPage} coins={currentData}
                               totalData={this.props.coins.length} paginate={this.paginate}/></div>}
                    />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        coins: state.coins,
        sortType: state.sortType,
        value: state.value,
        currentPage: state.currentPage,
        dataPerPage: state.dataPerPage

    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        addCoin(coins) {
            dispatch(addCoinTh(coins))
        },
        sortCoins(sortType, value) {
            dispatch(sortCoinsAC(sortType, value))
        },
        paginate(currentPage) {
            dispatch(paginateAC(currentPage))
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

