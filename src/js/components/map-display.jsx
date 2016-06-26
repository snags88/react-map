var Marker             = require('./../lib/map-marker')
  , MarkerManager      = require('./../lib/map-marker-manager')
  , InfoContentBuilder = require('./../lib/info-content-builder')
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
    this.props.results.forEach(this._addMarker);
    this._handlePointOfInterest(this.props.pointOfInterest);
  },

  shouldComponentUpdate: function shouldComponentUpdate (nextProps, nextState) {
    if(nextProps.results === this.props.results) {
      this.markerManager.clearInfoWindows();
      this._handlePointOfInterest(nextProps.pointOfInterest);
      return false;
    } else {
      return true;
    }
  },

  /*
   * private
   */

  _addMarker: function _addMarker(place) {
    var marker = new Marker(place, this.props.map)
      , infoWindow = new google.maps.InfoWindow({
          content: this._infoWindowContent(place)
        })
      ;

    marker.infoWindow = infoWindow;
    marker.addClickListener(this._onMarkerClick.bind(this, place));

    this.markerManager.markers.push(marker);
  },

  _onMarkerClick: function _onMarkerClick (place) {
    var marker = this.markerManager.findByPlace(place);
    marker.showInfoWindow();

    this.props.onMarkerClick(place);
  },

  _handlePointOfInterest: function _handlePointOfInterest (point) {
    if (point) {
      this.props.map.panTo(point.geometry.location);
      this.props.map.setZoom(15);

      var marker = this.markerManager.findByPlace(point);
      marker.showInfoWindow();
    }
  },

  _infoWindowContent: function _infoWindowContent (place) {
    var contentBuilder = new InfoContentBuilder(place);

    contentBuilder.addName();
    contentBuilder.addAddress();
    contentBuilder.addPhone();
    contentBuilder.addWebsite();
    contentBuilder.addRating();
    contentBuilder.addOuterContainer();

    return contentBuilder.content();
  }
})

module.exports = MapDisplay;
