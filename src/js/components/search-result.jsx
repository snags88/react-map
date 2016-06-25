

var SearchResult = React.createClass({
  render: function render () {
    var result = this.props.result;

    return (
      <li>
        {result.value}
      </li>
    );
  }
});

module.exports = SearchResult;
