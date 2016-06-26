var MapMarkerManager = function(map) {
  this.markers = [];
  this.map = map;
};

MapMarkerManager.prototype.clearAllMarkers = function clearAllMarkers () {
  this.markers.forEach(function(marker) {
    marker.closeInfoWindow();
    marker.setMap(null);
  });
  this.markers = []
};

MapMarkerManager.prototype.findByPlace = function findByPlace (place) {
  return this.markers.find(function(marker) {
    return marker.place() === place;
  });
};

MapMarkerManager.prototype.clearInfoWindows = function clearInfoWindows () {
  this.markers.forEach(function(marker) {
    marker.closeInfoWindow();
  });
}

module.exports = MapMarkerManager;
