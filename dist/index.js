import React from "/dist/web_modules/react.js";
import { render } from "/dist/web_modules/react-dom.js";
import { BrowserRouter as Router } from "/dist/web_modules/react-router-dom.js";
import App from "./app.js";
render( /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));