function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */
import React from "/dist/web_modules/react.js";
import { Link, useNavigate } from "/dist/web_modules/react-router-dom.js";
import { jsx, Box, Label, Input, Button } from "/dist/web_modules/theme-ui.js";
export default (props => {
  var navigate = useNavigate();
  return jsx(Box, {
    sx: {
      mb: 4,
      p: 4
    }
  }, jsx(Label, {
    htmlFor: "search"
  }, "Search"), jsx(Input, _extends({
    id: "search",
    name: "search"
  }, props, {
    sx: {
      my: 3
    }
  })), jsx(Button, {
    onClick: () => navigate('/login')
  }, "Login"), jsx("p", null, jsx(Link, {
    to: "nowhere"
  }, "Nowhere")));
});