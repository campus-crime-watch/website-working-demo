function initializeMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoidHJhY3l6eiIsImEiOiJjbGg1czdiczAyOWJlM2ZwanRxMnVucWc0In0.ZYsCAE_BAM76V1JuJJIGNA'; 
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/tracyzz/clh9x0t5q000l01rf5jwtexp4', 
      center: [-122.174, 37.424],
      zoom: 12.62
    });
    
/* an event listener that runs when a user clicks on the map element. */
    map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
    layers: ['toy-data'] // replace with your layer name
    });
    if (!features.length) {
        return;
  }
    const feature = features[0];

/* a popup */
  const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<p>${feature.properties.nature}<br>${feature.properties.date}</p>`
  )
  .addTo(map);});

  /* cursor change when hover */
  map.on('mouseenter', 'toy-data', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'toy-data', () => {
    map.getCanvas().style.cursor = '';
  });
  
}


initializeMap();