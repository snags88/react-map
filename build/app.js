(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var SearchForm = require('./search-form.jsx'),
    SearchResults = require('./search-results.jsx');

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
      React.createElement(SearchForm, { handleNewSearch: this.onNewSearch }),
      React.createElement(SearchResults, { results: this.state.results })
    );
  },

  getInitialState: function getInitialState() {
    return { results: [] };
    // TODO: eventually get last 5 places from local storage
  },

  onNewSearch: function onNewSearch(search) {
    console.log(search);
    this.setState({ results: [search] });
    //search on places and set first 10 to results.
  }
});

module.exports = MainComponent;

},{"./search-form.jsx":2,"./search-results.jsx":4}],2:[function(require,module,exports){
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
    // TODO: add validation to form.
    // TODO: add typeahead to assist search
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
"use strict";

var SearchResult = React.createClass({
  displayName: "SearchResult",

  render: function render() {
    var result = this.props.result;

    return React.createElement(
      "li",
      null,
      result.value
    );
  }
});

module.exports = SearchResult;

},{}],4:[function(require,module,exports){
'use strict';

var SearchResult = require('./search-result.jsx');

var SearchResults = React.createClass({
  displayName: 'SearchResults',

  render: function render() {
    return React.createElement(
      'ul',
      null,
      this.props.results.map(function (result, i) {
        return React.createElement(SearchResult, { result: result, key: i });
      }, this)
    );
  }
  // TODO: handle click on search result and send to top level app
});

module.exports = SearchResults;

},{"./search-result.jsx":3}],5:[function(require,module,exports){
'use strict';

var MainComponent = require('./components/main.jsx');

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('js--map'));

},{"./components/main.jsx":1}]},{},[5])