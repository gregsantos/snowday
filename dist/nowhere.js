/** @jsx jsx */
import React from "/dist/web_modules/react.js";
import { Link, useNavigate } from "/dist/web_modules/react-router-dom.js";
import { jsx, Box, Button } from "/dist/web_modules/theme-ui.js";
export default (props => {
  var navigate = useNavigate();
  return jsx(Box, {
    sx: {
      mb: 4,
      p: 4
    }
  }, jsx("div", {
    sx: {
      mb: 4,
      p: 2,
      fontWeight: 'bold',
      fontSize: 4,
      color: 'primary',
      backgroundColor: 'papayawhip',
      width: ['100%', '50%', '25%']
    }
  }, "Nowhere"), jsx(Button, {
    onClick: () => navigate('/')
  }, "Home"));
});