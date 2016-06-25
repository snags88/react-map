var SearchForm = require('./search-form.jsx')
  ;

var MainComponent = React.createClass({
  render: function render () {
    return (
      <div>
        <div> Hello World! </div>
        <SearchForm handleNewSearch = {this.onNewSearch}/>
      </div>
    );
  },

  onNewSearch: function onNewSearch (search) {
    console.log(search);
  }
});

module.exports = MainComponent;
