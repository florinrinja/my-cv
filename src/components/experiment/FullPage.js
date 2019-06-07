import React from "react";
import {Pagination} from "react-bootstrap";

import ReactPageScroller from 'react-page-scroller';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";

import "./index.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pagination.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pagination.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return (
        
        <div>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
                <FourthComponent goToPage={this.goToPage}/>
                <FifthComponent/>
            </ReactPageScroller>
            <Pagination className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pagination>
        </div>
        )
    }
}