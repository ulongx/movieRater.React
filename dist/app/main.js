"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_1 = require("react-router");
const ReactDOM = require("react-dom");
const createBrowserHistory_1 = require("history/lib/createBrowserHistory");
const routes_1 = require("./routes");
require("./main.css");
class Root extends React.Component {
    render() {
        return (React.createElement(react_router_1.Router, { history: createBrowserHistory_1.default() }, routes_1.default));
    }
}
const rootElement = document.getElementById('app');
ReactDOM.render(React.createElement(Root, null), rootElement);
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=main.js.map