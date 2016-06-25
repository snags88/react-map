var SearchForm    = require('./search-form.jsx')
  , SearchResults = require('./search-results.jsx')
  ;

var MainComponent = React.createClass({
  render: function render () {
    return (
      <div>
        <div> Hello World! </div>
        <SearchForm handleNewSearch = {this.onNewSearch}/>
        <SearchResults results = {this.state.results}/>
      </div>
    );
  },

  getInitialState: function getInitialState () {
    return { results: [] };
    // TODO: eventually get last 5 places from local storage
  },

  onNewSearch: function onNewSearch (search) {
    console.log(search);
    this.setState({results: [search]});
    //search on places and set first 10 to results.
  }
});

module.exports = MainComponent;
