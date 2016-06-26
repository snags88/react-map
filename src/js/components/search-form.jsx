var SearchForm = React.createClass({
  render: function render () {
    return (
      <form onSubmit = {this.handleSubmit} className = 'search-form'>
        <input
          type = 'text'
          className = 'search-input'
          id = 'js--search-input'
          placeholder = 'Search for a place...'
          value = {this.state.value}
          onChange = {this.handleChange}
        />
        <button type = 'submit' disabled = { !this.valid() }>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  },

  componentDidMount: function componentDidMount () {
    this.input = document.getElementById('js--search-input');

    this.searchBox = new google.maps.places.SearchBox(this.input, {});
  },

  getInitialState: function getInitialState () {
    return { value: '' };
  },

  valid: function valid () {
    return !!(this.state.value && this.state.value.length < 150);
  },

  handleChange: function handleChange (e) {
    var value = e.target.value;

    this.setState({value: value})
  },

  handleSubmit: function handleSubmit (e) {
    e.preventDefault();

    //TODO: Fix this hacky way of getting input value due to SearchBox
    var value = this.input.value;

    this.setState({value: value}, function () {
      this.props.handleNewSearch(this.state);
    });
  }
});

module.exports = SearchForm;
