var defaults = {
  animation: google.maps.Animation.DROP,
  icon: {
    url: 'http://maps.gstatic.com/mapfiles/circle.png',
    anchor: new google.maps.Point(10, 10),
    scaledSize: new google.maps.Size(10, 17)
  }
};

var MapMarker = function(place, map, opts) {
  if (!place) { throw 'Must pass in a Google place object' };

  opts = opts || {}
  opts = Object.assign({}, defaults, opts, {position: place.geometry.location, map: map})

  this._map    = map
  this._place = place
  this._marker = new google.maps.Marker(opts);
};

MapMarker.prototype.addClickListener = function addClickListener (callback) {
  google.maps.event.addListener(this._marker, 'click', callback);
};

MapMarker.prototype.setMap = function setMap (value) {
  this._marker.setMap(value);
};

MapMarker.prototype.place = function place () {
  return this._place;
};

MapMarker.prototype.showInfoWindow = function showInfoWindow () {
  if(!this.infoWindow) { throw 'Marker does not have an info window' }

  this.infoWindow.open(this._map, this._marker);
};

MapMarker.prototype.closeInfoWindow = function closeInfoWindow () {
  if(!this.infoWindow) { throw 'Marker does not have an info window' }

  this.infoWindow.close(this._map, this._marker);
};

module.exports = MapMarker;
