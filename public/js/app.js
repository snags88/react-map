(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Loader = React.createClass({
  displayName: 'Loader',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'loader' + (this.props.loading ? ' active' : '') },
      React.createElement('img', { src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJibGFjayI+DQogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIpIiBkPSJNMCAxMiBWMjAgSDQgVjEyeiI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgdmFsdWVzPSJNMCAxMiBWMjAgSDQgVjEyejsgTTAgNCBWMjggSDQgVjR6OyBNMCAxMiBWMjAgSDQgVjEyejsgTTAgMTIgVjIwIEg0IFYxMnoiIGR1cj0iMS4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIiBrZXl0aW1lcz0iMDsuMjsuNTsxIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuNiAwLjQgMC44OzAuMiAwLjggMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgIC8+DQogIDwvcGF0aD4NCiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCkiIGQ9Ik0wIDEyIFYyMCBINCBWMTJ6Ij4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJkIiB2YWx1ZXM9Ik0wIDEyIFYyMCBINCBWMTJ6OyBNMCA0IFYyOCBINCBWNHo7IE0wIDEyIFYyMCBINCBWMTJ6OyBNMCAxMiBWMjAgSDQgVjEyeiIgZHVyPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMiIga2V5dGltZXM9IjA7LjI7LjU7MSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjYgMC40IDAuODswLjIgMC44IDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiICAvPg0KICA8L3BhdGg+DQogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0KSIgZD0iTTAgMTIgVjIwIEg0IFYxMnoiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImQiIHZhbHVlcz0iTTAgMTIgVjIwIEg0IFYxMno7IE0wIDQgVjI4IEg0IFY0ejsgTTAgMTIgVjIwIEg0IFYxMno7IE0wIDEyIFYyMCBINCBWMTJ6IiBkdXI9IjEuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40IiBrZXl0aW1lcz0iMDsuMjsuNTsxIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuNiAwLjQgMC44OzAuMiAwLjggMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4NCiAgPC9wYXRoPg0KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCkiIGQ9Ik0wIDEyIFYyMCBINCBWMTJ6Ij4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJkIiB2YWx1ZXM9Ik0wIDEyIFYyMCBINCBWMTJ6OyBNMCA0IFYyOCBINCBWNHo7IE0wIDEyIFYyMCBINCBWMTJ6OyBNMCAxMiBWMjAgSDQgVjEyeiIgZHVyPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNiIga2V5dGltZXM9IjA7LjI7LjU7MSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjYgMC40IDAuODswLjIgMC44IDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvcGF0aD4NCiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYpIiBkPSJNMCAxMiBWMjAgSDQgVjEyeiI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgdmFsdWVzPSJNMCAxMiBWMjAgSDQgVjEyejsgTTAgNCBWMjggSDQgVjR6OyBNMCAxMiBWMjAgSDQgVjEyejsgTTAgMTIgVjIwIEg0IFYxMnoiIGR1cj0iMS4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjgiIGtleXRpbWVzPSIwOy4yOy41OzEiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC42IDAuNCAwLjg7MC4yIDAuOCAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPg0KICA8L3BhdGg+DQo8L3N2Zz4=' })
    );
  }
});

module.exports = Loader;

},{}],2:[function(require,module,exports){
'use strict';

var SearchForm = require('./search-form.jsx'),
    SearchResults = require('./search-results.jsx'),
    GeoLocator = require('./../lib/geo-locator.js'),
    MapDisplay = require('./map-display.jsx'),
    Loader = require('./loader.jsx');

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
          React.createElement(Loader, { loading: this.state.loading }),
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
            placesService: this.places,
            pointOfInterest: this.state.pointOfInterest,
            results: this.state.results,
            onMarkerClick: this.updatePointOfInterest
          })
        )
      )
    );
  },

  getInitialState: function getInitialState() {
    return {
      results: [],
      pointOfInterest: null,
      loading: false
    };
    // TODO: handle search query in URL and use for initial state
  },

  componentDidMount: function componentDidMount() {
    this._setGoogleTools();
    this._setMapListeners();
  },

  onNewSearch: function onNewSearch(search) {
    this.setState({ loading: true, results: [] });

    var request = {
      location: this.latLng,
      radius: '2000',
      query: search.value
    };

    this.places.textSearch(request, this._handleSearchResponse);
  },

  updatePointOfInterest: function updatePointOfInterest(place) {
    if (place !== this.state.pointOfInterest) {
      this.setState({ pointOfInterest: place });
    }
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
      this.setState({ results: results, pointOfInterest: results[0], loading: false });
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

},{"./../lib/geo-locator.js":8,"./loader.jsx":1,"./map-display.jsx":3,"./search-form.jsx":4,"./search-results.jsx":6}],3:[function(require,module,exports){
'use strict';

var Marker = require('./../lib/map-marker'),
    MarkerManager = require('./../lib/map-marker-manager');

var MapDisplay = React.createClass({
  displayName: 'MapDisplay',

  render: function render() {
    return React.createElement('div', { id: 'js--el-map', className: 'map' });
  },

  componentDidMount: function componentDidMount() {
    this.markerManager = new MarkerManager(this.props.map);
  },

  componentDidUpdate: function componentDidUpdate() {
    this.markerManager.clearAllMarkers();
    this.props.results.forEach(this.addMarker);
    this.handlePointOfInterest();
  },

  addMarker: function addMarker(place) {
    var marker = new Marker(place.geometry.location, this.props.map);
    marker.addClickListener(this.onMarkerClick.bind(this, place));

    this.markerManager.markers.push(marker);
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

},{"./../lib/map-marker":10,"./../lib/map-marker-manager":9}],4:[function(require,module,exports){
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
        id: 'js--search-input',
        placeholder: 'Search for a place...',
        value: this.state.value,
        onChange: this.handleChange
      }),
      React.createElement(
        'button',
        { type: 'submit', disabled: !this.valid() },
        React.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
      )
    );
  },

  componentDidMount: function componentDidMount() {
    this.input = document.getElementById('js--search-input');

    this.searchBox = new google.maps.places.SearchBox(this.input, {});
  },

  getInitialState: function getInitialState() {
    return { value: '' };
  },

  valid: function valid() {
    return !!this.state.value;
  },

  handleChange: function handleChange(e) {
    var value = e.target.value;

    this.setState({ value: value });
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();

    //TODO: Fix this hacky way of getting input value due to SearchBox
    var value = this.input.value;

    this.setState({ value: value }, function () {
      this.props.handleNewSearch(this.state);
    });
  }
});

module.exports = SearchForm;

},{}],5:[function(require,module,exports){
'use strict';

var SearchResult = React.createClass({
  displayName: 'SearchResult',

  render: function render() {
    var result = this.props.result;

    return React.createElement(
      'li',
      { onClick: this.handleClick },
      React.createElement(
        'div',
        { className: 'name' },
        ' ',
        result.name,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'address' },
        ' ',
        result.formatted_address
      ),
      React.createElement(
        'div',
        { className: 'phone' },
        ' ',
        result.formatted_phone_number,
        ' '
      )
    );
  },

  handleClick: function handleClick(e) {
    console.log(this.props.result);
    this.props.onResultClick(this.props.result);
  }
  // TODO: make results look good
});

module.exports = SearchResult;

},{}],6:[function(require,module,exports){
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

},{"./search-result.jsx":5}],7:[function(require,module,exports){
'use strict';

var MainComponent = require('./components/main.jsx');

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('js--map'));

},{"./components/main.jsx":2}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

var MapMarkerManager = function MapMarkerManager(map) {
  this.markers = [];
  this.map = map;
};

MapMarkerManager.prototype.clearAllMarkers = function clearAllMarkers() {
  this.markers.forEach(function (marker) {
    marker.setMap(null);
  });
  this.markers = [];
};

module.exports = MapMarkerManager;

},{}],10:[function(require,module,exports){
'use strict';

var defaults = {
  animation: google.maps.Animation.DROP,
  icon: {
    url: 'http://maps.gstatic.com/mapfiles/circle.png',
    anchor: new google.maps.Point(10, 10),
    scaledSize: new google.maps.Size(10, 17)
  }
};

var MapMarker = function MapMarker(position, map, opts) {
  if (!position) {
    throw 'Must pass in a position';
  };

  opts = opts || {};
  opts = Object.assign({}, defaults, opts, { position: position, map: map });

  this._marker = new google.maps.Marker(opts);
};

MapMarker.prototype.addClickListener = function addClickListener(callback) {
  google.maps.event.addListener(this._marker, 'click', callback);
};

MapMarker.prototype.setMap = function setMap(value) {
  this._marker.setMap(value);
};

module.exports = MapMarker;

},{}]},{},[7])