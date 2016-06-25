var MapDisplay = React.createClass({
  render: function render () {
    return (
      <div id = 'js--el-map' style = {{height: '500px'}} />
    );
  },

  componentDidUpdate: function componentDidUpdate () {
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

  onMarkerClick: function onMarkerClick (place) {
    this.props.onMarkerClick(place);
  },

  handlePointOfInterest: function handlePointOfInterest () {
    var point = this.props.pointOfInterest;

    if (point) {
      this.props.map.panTo(point.geometry.location);
      this.props.map.setZoom(15);
    }
    // TODO: do something with the point of interest like show details
  }
})

module.exports = MapDisplay;
