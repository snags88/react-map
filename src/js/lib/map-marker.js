var defaults = {
  animation: google.maps.Animation.DROP,
  icon: {
    url: 'http://maps.gstatic.com/mapfiles/circle.png',
    anchor: new google.maps.Point(10, 10),
    scaledSize: new google.maps.Size(10, 17)
  }
};

var MapMarker = function(position, map, opts) {
  if (!position) { throw 'Must pass in a position' };

  opts = opts || {}
  opts = Object.assign({}, defaults, opts, {position: position, map: map})

  this._marker = new google.maps.Marker(opts);
};

MapMarker.prototype.addClickListener = function addClickListener (callback) {
  google.maps.event.addListener(this._marker, 'click', callback);
};

MapMarker.prototype.setMap = function setMap (value) {
  this._marker.setMap(value);
};

module.exports = MapMarker;
