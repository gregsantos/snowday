/** @jsx jsx */
import { jsx } from "/dist/web_modules/theme-ui.js";
export default (props => jsx("div", {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    variant: 'layout.root'
  }
}, jsx("header", {
  sx: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    variant: 'layout.header'
  }
}, jsx("div", {
  sx: {
    p: 2,
    fontWeight: 'bold',
    fontSize: 4,
    backgroundColor: 'secondary',
    width: '100%'
  }
}, "SN0WD\u2603\uFE0FY")), jsx("main", {
  sx: {
    width: '100%',
    flex: '1 1 auto',
    variant: 'layout.main'
  }
}, jsx("div", {
  sx: {
    maxWidth: 768,
    mx: 'auto',
    px: 3,
    variant: 'layout.container'
  }
}, props.children))));