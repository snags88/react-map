

var MapDisplay = React.createClass({
  render: function render () {
    return (
      <div id = 'js--el-map' style = {{height: '500px'}} />
    );
  },

  componentDidUpdate: function componentDidUpdate () {
    this.props.results.forEach(this.addMarker);
    // TODO: maybe add some delay on the drops and change the pin style
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

    google.maps.event.addListener(marker, 'click', function() {
      service.getDetails(place, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        infoWindow.setContent(result.name);
        infoWindow.open(map, marker);
      });
    });
  }
  // TODO: drop pins on result
  // TODO: drop pin and center on point of interest
  // TODO: onClick of pin, set place of interest on top level app
})

module.exports = MapDisplay;
