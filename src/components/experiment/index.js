import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import FullPage from "./FullPage";


import "./index.css";

class Demo extends React.Component {
    render() {
        return (
            <div>
                <FullPage/>
            </div>
        )
    }
}

ReactDOM.render(
    document.getElementById("root")
);