(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var SearchForm = require('./search-form.jsx');

var MainComponent = React.createClass({
  displayName: 'MainComponent',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        ' Hello World! '
      ),
      React.createElement(SearchForm, { handleNewSearch: this.onNewSearch })
    );
  },

  onNewSearch: function onNewSearch(search) {
    console.log(search);
  }
});

module.exports = MainComponent;

},{"./search-form.jsx":2}],2:[function(require,module,exports){
'use strict';

var SearchForm = React.createClass({
  displayName: 'SearchForm',

  render: function render() {
    return React.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Search for a place...',
        value: this.state.value,
        onChange: this.handleChange
      }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Search'
      )
    );
    // add validation to form.
  },

  getInitialState: function getInitialState() {
    return { value: '' };
  },

  handleChange: function handleChange(e) {
    this.setState({ value: e.target.value });
    console.log('changed');
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.handleNewSearch(this.state);
    this.setState(this.getInitialState());
  }
});

module.exports = SearchForm;

},{}],3:[function(require,module,exports){
'use strict';

var MainComponent = require('./components/main.jsx');

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('js--map'));

},{"./components/main.jsx":1}]},{},[3])