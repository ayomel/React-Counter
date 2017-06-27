"use strict";

/*********
* REACT
**********/

/* Create Counter component which takes value, onIncrement, and onDecrement as its parameters */
var Counter = function Counter(_ref) {
  var value = _ref.value;
  var onIncrement = _ref.onIncrement;
  var onDecrement = _ref.onDecrement;
  var onReset = _ref.onReset;
  return React.createElement(
    "div",
    { id: "counter-app" },
    React.createElement(
      "div",
      { id: "display-container", className: "container" },
      React.createElement(
        "p",
        { id: "display" },
        value
      )
    ),
    React.createElement(
      "div",
      { id: "buttons-container", className: "container" },
      React.createElement(
        "button",
        { id: "increment-button", className: "button", onClick: onIncrement },
        React.createElement("i", { className: "fa fa-plus" })
      ),
      React.createElement(
        "button",
        { id: "decrement-button", className: "button", onClick: onDecrement },
        React.createElement("i", { className: "fa fa-minus" })
      ),
      React.createElement(
        "button",
        { id: "reset-button", className: "button", onClick: onReset },
        React.createElement("i", { className: "fa fa-refresh" })
      )
    )
  );
};

/* Wrapper function for ReactDOM.render functionality for the app */
var render = function render() {
  ReactDOM.render(React.createElement(Counter, {
    value: store.getState(),
    onIncrement: function onIncrement() {
      var val = store.getState();
      if (val < 99) {
        store.dispatch({
          type: 'INCREMENT'
        });
      }
    },
    onDecrement: function onDecrement() {
      var val = store.getState();
      if (val > 0) {
        store.dispatch({
          type: 'DECREMENT'
        });
      };
    },
    onReset: function onReset() {
      store.dispatch({
        type: 'RESET'
      });
    }
  }), document.getElementById('react-root'));
};

/*********
* REDUX
**********/

/* counter takes a default value for state, and an action */
var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

/* Import { createStore } from 'redux' */
var _Redux = Redux;
var createStore = _Redux.createStore;
/* store uses counter as its reducer */

var store = createStore(counter);

/* When the state in store changes, use this function */
store.subscribe(render);

/* Initial render */
render();