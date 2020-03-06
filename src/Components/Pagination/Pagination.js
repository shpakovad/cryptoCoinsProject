import React, {Component} from 'react';
import style from './Pagination.module.css'
import { NavLink} from "react-router-dom";


class Pagination extends Component {

    render() {

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.totalData / this.props.dataPerPage); i++) {
            pageNumbers.push(i)
        }
        return (
            <div className={style.paginator}  >
                {pageNumbers.map((number) => {
                    return <NavLink  key={number.toString()}
                              onClick={() => {
                                  this.props.paginate(number)
                              }}
                               to='/'  >
                        {number}
                    </NavLink>
                })
                }

            </div>
        );
    }
}

export default Pagination;
