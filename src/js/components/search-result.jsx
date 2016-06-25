

var SearchResult = React.createClass({
  render: function render () {
    var result = this.props.result;

    return (
      <li>
        {result.name}
      </li>
    );
  }

  //make results look good
});

module.exports = SearchResult;
