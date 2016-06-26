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
    this.handlePointOfInterest(this.props.pointOfInterest);
  },

  shouldComponentUpdate: function shouldComponentUpdate (nextProps, nextState) {
    if(nextProps.results === this.props.results) {
      this.markerManager.clearInfoWindows();
      this.handlePointOfInterest(nextProps.pointOfInterest);
      return false;
    } else {
      return true;
    }
  },

  addMarker: function addMarker(place) {
    var marker = new Marker(place, this.props.map)
      , infoWindow = new google.maps.InfoWindow({
          content: place.name
        })
      ;

    marker.infoWindow = infoWindow;
    marker.addClickListener(this.onMarkerClick.bind(this, place));

    this.markerManager.markers.push(marker);
  },

  onMarkerClick: function onMarkerClick (place) {
    var marker = this.markerManager.findByPlace(place);
    marker.showInfoWindow();

    this.props.onMarkerClick(place);
  },

  handlePointOfInterest: function handlePointOfInterest (point) {
    if (point) {
      this.props.map.panTo(point.geometry.location);
      this.props.map.setZoom(15);

      var marker = this.markerManager.findByPlace(point);
      marker.showInfoWindow();
    }
  }
})

module.exports = MapDisplay;
