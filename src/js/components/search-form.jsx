

var SearchForm = React.createClass({
  render: function render () {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input
          type = 'text'
          placeholder = 'Search for a place...'
          value = {this.state.value}
          onChange = {this.handleChange}
        />
        <button type = 'submit'>
          Search
        </button>
      </form>
    );
    // add validation to form.
  },

  getInitialState: function getInitialState () {
    return { value: '' };
  },

  handleChange: function handleChange (e) {
    this.setState({value: e.target.value})
    console.log('changed');
  },

  handleSubmit: function handleSubmit (e) {
    e.preventDefault();
    this.props.handleNewSearch(this.state);
    this.setState(this.getInitialState());
  }
});

module.exports = SearchForm;
