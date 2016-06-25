var GeoLocator = function (errorEl) {
  this._errorEl = errorEl;
  this.fetchLocation();

  // default
  this._lat = 37.7749;
  this._long = -122.4194;
};

GeoLocator.prototype.fetchLocation = function fetchLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition.bind(this), showError.bind(this));
        // TODO: handle error
    } else {
        this._errorEl.innerHTML = "Geolocation is not supported by this browser.";
    }
}

GeoLocator.prototype.lat = function lat () {
  return this._lat;
}

GeoLocator.prototype.longitude = function longitude () {
  return this._long;
}

function setPosition (position) {
  this._lat = position.coords.latitude;
  this._long = position.coords.longitude;
}

function showError (error) {
  // show error.message
}

module.exports = GeoLocator;
