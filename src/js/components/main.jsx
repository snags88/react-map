var SearchForm    = require('./search-form.jsx')
  , SearchResults = require('./search-results.jsx')
  , GeoLocator    = require('./../lib/geo-locator.js')
  , MapDisplay    = require('./map-display.jsx')
  , Loader        = require('./loader.jsx')
  , W             = require('when')
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
              placesService = {this.placesService}
            />
            <Loader loading = {this.state.loading} />
          </div>
        </div>
        <div id = 'mainBody'>
          <div id = 'mapDisplay'>
            <MapDisplay
              map = {this.map}
              placesService = {this.placesService}
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
    return {
      results: [],
      pointOfInterest: null,
      loading: false
    };
    // TODO: handle search query in URL and use for initial state
  },

  componentDidMount: function componentDidMount () {
    this._setGoogleTools();
    this._setMapListeners();
  },

  onNewSearch: function onNewSearch (search) {
    this.setState({loading: true, results: []});

    var request = {
        location: this.latLng,
        radius: '2000',
        query: search.value
      };

    this.placesService.textSearch(request, this._handleSearchResponse);
  },

  updatePointOfInterest: function updatePointOfInterest (place) {
    if (place !== this.state.pointOfInterest) {
      this.setState({pointOfInterest: place});
    }
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
    this.placesService = new google.maps.places.PlacesService(this.map);
  },

  _handleSearchResponse: function _handleSearchResponse (results, status) {
    this.results = results;

    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var subSet = results.slice(0, 10);

      W.map(subSet, this._sendDetailRequest)
        .with(this)
        .done(function(detailResults) {
          this.setState({results: detailResults, pointOfInterest: detailResults[0], loading: false});
        });
        //.catch() handle error here
    } else {
      //handle error
    }
  },

  _sendDetailRequest: function _sendDetailRequest (result) {
    var request  = { placeId: result.place_id }
      , deferred = W.defer()
      , self     = this
      ;

    // Required due to query rate (query per second) limitation on Google API
    setTimeout(function() {self.placesService.getDetails(request, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        return deferred.resolve(place)
      } else {
        return deferred.reject(status);
      }
    })}, 500);

    return deferred.promise;
  },

  _setMapListeners: function _setMapListeners () {
    var self = this;

    google.maps.event.addListener(this.map, 'center_changed', function () {
      self.latLng = self.map.getCenter()
    })
  }
});

module.exports = MainComponent;
