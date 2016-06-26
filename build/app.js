(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var SearchForm = require('./search-form.jsx'),
    SearchResults = require('./search-results.jsx'),
    GeoLocator = require('./../lib/geo-locator.js'),
    MapDisplay = require('./map-display.jsx');

var MainComponent = React.createClass({
  displayName: 'MainComponent',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { id: 'leftPane' },
        React.createElement(
          'div',
          { id: 'searchField' },
          React.createElement(SearchForm, {
            handleNewSearch: this.onNewSearch
          })
        ),
        React.createElement(
          'div',
          { id: 'searchResults' },
          React.createElement(SearchResults, {
            results: this.state.results,
            onResultClick: this.updatePointOfInterest
          })
        )
      ),
      React.createElement(
        'div',
        { id: 'mainBody' },
        React.createElement(
          'div',
          { id: 'mapDisplay' },
          React.createElement(MapDisplay, {
            map: this.map,
            pointOfInterest: this.state.pointOfInterest,
            results: this.state.results,
            onMarkerClick: this.updatePointOfInterest
          })
        )
      )
    );
  },

  getInitialState: function getInitialState() {
    return { results: [], pointOfInterest: null };
    // TODO: eventually get last 5 places from local storage
    // TODO: handle search query in URL and use for initial state
  },

  componentDidMount: function componentDidMount() {
    this._setGoogleTools();
    this._setMapListeners();
  },

  onNewSearch: function onNewSearch(search) {
    var request = {
      location: this.latLng,
      radius: '2000',
      query: search.value
    };

    this.places.textSearch(request, this._handleSearchResponse);
  },

  updatePointOfInterest: function updatePointOfInterest(place) {
    this.setState({ pointOfInterest: place });
    // TODO: set last 5 POI to local storage
  },

  /*
   * private
   */

  _setGoogleTools: function _setGoogleTools() {
    var coord = new GeoLocator();

    this.latLng = new google.maps.LatLng(coord.lat(), coord.longitude());
    this.map = new google.maps.Map(document.getElementById('js--el-map'), {
      center: this.latLng,
      zoom: 12
    });
    this.places = new google.maps.places.PlacesService(this.map);
  },

  _handleSearchResponse: function _handleSearchResponse(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.setState({ results: results, pointOfInterest: results[0] });
    } else {
      //handle error
    }
  },

  _setMapListeners: function _setMapListeners() {
    var self = this;

    google.maps.event.addListener(this.map, 'center_changed', function () {
      self.latLng = self.map.getCenter();
    });
  }
});

module.exports = MainComponent;

},{"./../lib/geo-locator.js":7,"./map-display.jsx":2,"./search-form.jsx":3,"./search-results.jsx":5}],2:[function(require,module,exports){
'use strict';

var MapDisplay = React.createClass({
  displayName: 'MapDisplay',

  render: function render() {
    return React.createElement('div', { id: 'js--el-map', className: 'map' });
  },

  componentDidUpdate: function componentDidUpdate() {
    // TODO: store markers in array and remove before component updates
    // TODO: maybe add some delay on the drops and change the pin style
    this.props.results.forEach(this.addMarker);
    this.handlePointOfInterest();
  },

  addMarker: function addMarker(place) {
    var marker = new google.maps.Marker({
      map: this.props.map,
      position: place.geometry.location,
      animation: google.maps.Animation.DROP,
      icon: {
        url: 'http://maps.gstatic.com/mapfiles/circle.png',
        anchor: new google.maps.Point(10, 10),
        scaledSize: new google.maps.Size(10, 17)
      }
    });

    google.maps.event.addListener(marker, 'click', this.onMarkerClick.bind(this, place));
  },

  onMarkerClick: function onMarkerClick(place) {
    this.props.onMarkerClick(place);
  },

  handlePointOfInterest: function handlePointOfInterest() {
    var point = this.props.pointOfInterest;

    if (point) {
      this.props.map.panTo(point.geometry.location);
      this.props.map.setZoom(15);

      // TODO: do something with the point of interest like show details
    }
  }
});

module.exports = MapDisplay;

},{}],3:[function(require,module,exports){
'use strict';

var SearchForm = React.createClass({
  displayName: 'SearchForm',

  render: function render() {
    return React.createElement(
      'form',
      { onSubmit: this.handleSubmit, className: 'search-form' },
      React.createElement('input', {
        type: 'text',
        className: 'search-input',
        placeholder: 'Search for a place...',
        value: this.state.value,
        onChange: this.handleChange
      }),
      React.createElement(
        'button',
        { type: 'submit' },
        React.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
      )
    );
    // TODO: add validation to form
    // TODO: add typeahead to assist search
  },

  getInitialState: function getInitialState() {
    return { value: '' };
  },

  handleChange: function handleChange(e) {
    this.setState({ value: e.target.value });
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.handleNewSearch(this.state);
    //this.setState(this.getInitialState());
  }
});

module.exports = SearchForm;

},{}],4:[function(require,module,exports){
"use strict";

var SearchResult = React.createClass({
  displayName: "SearchResult",

  render: function render() {
    var result = this.props.result;

    return React.createElement(
      "li",
      { onClick: this.handleClick },
      result.name
    );
  },

  handleClick: function handleClick(e) {
    this.props.onResultClick(this.props.result);
  }
  // TODO: make results look good
});

module.exports = SearchResult;

},{}],5:[function(require,module,exports){
'use strict';

var SearchResult = require('./search-result.jsx');

var SearchResults = React.createClass({
  displayName: 'SearchResults',

  render: function render() {
    return React.createElement(
      'ul',
      null,
      this.props.results.map(function (result, i) {
        return React.createElement(SearchResult, {
          result: result,
          key: i,
          onResultClick: this.props.onResultClick
        });
      }, this)
    );
  }
});

module.exports = SearchResults;

},{"./search-result.jsx":4}],6:[function(require,module,exports){
'use strict';

var MainComponent = require('./components/main.jsx');

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('js--map'));

},{"./components/main.jsx":1}],7:[function(require,module,exports){
"use strict";

var GeoLocator = function GeoLocator(errorEl) {
  this._errorEl = errorEl;
  this.fetchLocation();

  // default
  this._lat = 37.7749;
  this._long = -122.4194;
};

GeoLocator.prototype.fetchLocation = function fetchLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition.bind(this), showError.bind(this));
    // TODO: handle error
  } else {
    this._errorEl.innerHTML = "Geolocation is not supported by this browser.";
  }
};

GeoLocator.prototype.lat = function lat() {
  return this._lat;
};

GeoLocator.prototype.longitude = function longitude() {
  return this._long;
};

function setPosition(position) {
  this._lat = position.coords.latitude;
  this._long = position.coords.longitude;
}

function showError(error) {
  // show error.message
}

module.exports = GeoLocator;

},{}]},{},[6])