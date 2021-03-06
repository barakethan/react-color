'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopBotton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, props);

  var handleClick = function handleClick(e) {
    props.onClick && props.onClick(e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: handleClick },
    props.label || props.children
  );
};

exports.default = PhotoshopBotton;