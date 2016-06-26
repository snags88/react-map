var SearchForm = React.createClass({
  render: function render () {
    return (
      <form onSubmit = {this.handleSubmit} className = 'search-form'>
        <input
          type = 'text'
          className = 'search-input'
          placeholder = 'Search for a place...'
          value = {this.state.value}
          onChange = {this.handleChange}
        />
        <button type = 'submit' disabled = { !this.valid() }>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
    // TODO: add typeahead to assist search
  },

  getInitialState: function getInitialState () {
    return { value: '' };
  },

  valid: function valid () {
    return !!(this.state.value);
  },

  handleChange: function handleChange (e) {
    this.setState({value: e.target.value})
  },

  handleSubmit: function handleSubmit (e) {
    e.preventDefault();
    this.props.handleNewSearch(this.state);
    //this.setState(this.getInitialState());
  }
});

module.exports = SearchForm;
