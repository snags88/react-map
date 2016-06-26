var MapMarkerManager = function(map) {
  this.markers = [];
  this.map = map;
};

MapMarkerManager.prototype.clearAllMarkers = function clearAllMarkers () {
  this.markers.forEach(function(marker) { marker.setMap(null); });
  this.markers = []
};

module.exports = MapMarkerManager;
