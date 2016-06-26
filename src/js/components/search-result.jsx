var SearchResult = React.createClass({
  render: function render () {
    var result = this.props.result;

    return (
      <li onClick = {this.handleClick}>
        <div className = 'name'> {result.name} </div>
        <div className = 'address'> {result.formatted_address}</div>
        <div className = 'phone'> {result.formatted_phone_number} </div>
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
