var SearchResult = require('./search-result.jsx')
  ;

var SearchResults = React.createClass({
  render: function render () {
    return (
      <ul>
        {
          this.props.results.map(function(result, i) {
            return <SearchResult
                     result = {result}
                     key={i}
                     onResultClick = {this.props.onResultClick}
                   />;
          }, this)
        }
      </ul>
   );
  }
  // TODO: handle click on search result and send to top level app
});

module.exports = SearchResults;
