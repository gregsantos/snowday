import React, { Suspense, lazy } from "/dist/web_modules/react.js";
import { Route, Routes } from "/dist/web_modules/react-router-dom.js";
import { ThemeProvider } from "/dist/web_modules/theme-ui.js";
import Layout from "./layout.js";
import theme from "./theme.js";
var Home = lazy(() => import("./home.js"));
var Login = lazy(() => import("./login.js"));
var Nowhere = lazy(() => import("./nowhere.js"));
export default (() => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement("div", null, "Loading...")
  }, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/login",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/nowhere",
    element: /*#__PURE__*/React.createElement(Nowhere, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/*",
    element: /*#__PURE__*/React.createElement("h1", null, "Not Found")
  })))));
});