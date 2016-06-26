var Marker = require('./../lib/map-marker')
  , MarkerManager = require('./../lib/map-marker-manager')
  ;

var MapDisplay = React.createClass({
  render: function render () {
    return (
      <div id = 'js--el-map' className = 'map'/>
    );
  },

  componentDidMount: function componentDidMount () {
    this.markerManager = new MarkerManager(this.props.map)
  },

  componentDidUpdate: function componentDidUpdate () {
    this.markerManager.clearAllMarkers();
    this.props.results.forEach(this.addMarker);
    this.handlePointOfInterest();
  },

  addMarker: function addMarker(place) {
    var marker = new Marker(place.geometry.location, this.props.map);
    marker.addClickListener(this.onMarkerClick.bind(this, place));

    this.markerManager.markers.push(marker);
  },

  onMarkerClick: function onMarkerClick (place) {
    this.props.onMarkerClick(place);
  },

  handlePointOfInterest: function handlePointOfInterest () {
    var point = this.props.pointOfInterest;

    if (point) {
      this.props.map.panTo(point.geometry.location);
      this.props.map.setZoom(15);

    // TODO: do something with the point of interest like show details
    }
  }
})

module.exports = MapDisplay;
