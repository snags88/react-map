var SearchResult = React.createClass({
  render: function render () {
    var result = this.props.result;

    return (
      <li onClick = {this.handleClick}>
        {result.name}
      </li>
    );
  },

  handleClick: function handleClick (e) {
    console.log(this.props.result);
    this.props.onResultClick(this.props.result);
  }
  // TODO: make results look good
});

module.exports = SearchResult;
