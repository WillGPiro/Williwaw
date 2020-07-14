import React from 'react';  


class WeatherMap extends Component {
  renderMap = () => {
    const options = {
      // Required: API key
      key: 'oh8TA6nFWmMPB9BMWgf5np05HWRTdDyv',
      // Put additional console output
      verbose: true,
      // Optional: Initial state of the map
      lat: 50.4,
      lon: 14.3,
      zoom: 5,
    };

    windyInit(options, (windyAPI) => {
      const { map } = windyAPI;
      L.popup()
        .setLatLng([50.4, 14.3])
        .setContent("Hello World")
        .openOn( map );
    });
  }

  useEffect = (() => {
    const renderMap();
  }, []);

  render() {
    return (<div id='windy' />);
  }
}

export default WeatherMap;

