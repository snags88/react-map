var SearchForm    = require('./search-form.jsx')
  , SearchResults = require('./search-results.jsx')
  , GeoLocator    = require('./../lib/geo-locator.js')
  ;

var MainComponent = React.createClass({
  render: function render () {
    return (
      <div>
        <SearchForm handleNewSearch = {this.onNewSearch}/>
        <SearchResults results = {this.state.results}/>
        <div id = 'js--el-map'/>
      </div>
    );
  },

  getInitialState: function getInitialState () {
    return { results: [] };
    // TODO: eventually get last 5 places from local storage
  },

  componentDidMount: function componentDidMount () {
    var coord = new GeoLocator()

    this.latLng = new google.maps.LatLng(coord.lat(), coord.longitude());
    this.map    = new google.maps.Map(document.getElementById('js--el-map'), {
      center: this.latLng,
      zoom: 15
    });
    this.places = new google.maps.places.PlacesService(this.map);
  },

  onNewSearch: function onNewSearch (search) {
    var request = {
        location: this.latLng,
        radius: '2000',
        query: search.value
      };

    this.places.textSearch(request, this.handleSearchResponse);
    this.setState({results: [search]});
  },

  handleSearchResponse: function handleSearchResponse (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      this.setState({results: results});
    } else {
      //handle error
    }
  },

});

module.exports = MainComponent;
