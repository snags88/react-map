var SearchForm    = require('./search-form.jsx')
  , SearchResults = require('./search-results.jsx')
  , GeoLocator    = require('./../lib/geo-locator.js')
  , MapDisplay    = require('./map-display.jsx')
  ;

var MainComponent = React.createClass({
  render: function render () {
    return (
      <div>
        <div id = 'leftPane'>
          <div id = 'searchField'>
            <SearchForm
              handleNewSearch = {this.onNewSearch}
            />
          </div>
          <div id = 'searchResults'>
            <SearchResults
              results = {this.state.results}
              onResultClick = {this.updatePointOfInterest}
            />
          </div>
        </div>
        <div id = 'mainBody'>
          <div id = 'mapDisplay'>
            <MapDisplay
              map = {this.map}
              pointOfInterest = {this.state.pointOfInterest}
              results = {this.state.results}
              onMarkerClick = {this.updatePointOfInterest}
            />
          </div>
        </div>
      </div>
    );
  },

  getInitialState: function getInitialState () {
    return { results: [], pointOfInterest: null };
    // TODO: eventually get last 5 places from local storage
  },

  componentDidMount: function componentDidMount () {
    this._setGoogleTools();
    this._setMapListeners();
  },

  onNewSearch: function onNewSearch (search) {
    var request = {
        location: this.latLng,
        radius: '2000',
        query: search.value
      };

    this.places.textSearch(request, this._handleSearchResponse);
  },

  updatePointOfInterest: function updatePointOfInterest (place) {
    this.setState({pointOfInterest: place});
    // TODO: set last 5 POI to local storage
  },

  /*
   * private
   */

  _setGoogleTools: function _setGoogleTools () {
    var coord = new GeoLocator()

    this.latLng = new google.maps.LatLng(coord.lat(), coord.longitude());
    this.map    = new google.maps.Map(document.getElementById('js--el-map'), {
      center: this.latLng,
      zoom: 12
    });
    this.places = new google.maps.places.PlacesService(this.map);
  },

  _handleSearchResponse: function _handleSearchResponse (results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.setState({results: results, pointOfInterest: results[0]});
    } else {
      //handle error
    }
  },

  _setMapListeners: function _setMapListeners () {
    var self = this;

    google.maps.event.addListener(this.map, 'center_changed', function () {
      self.latLng = self.map.getCenter()
    })
  }
});

module.exports = MainComponent;
