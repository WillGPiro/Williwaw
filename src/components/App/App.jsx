import React, { Component } from 'react';
// import Routes from '../Router/Routes.jsx';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './App.css';


class App extends Component {
  
  state = {
    seasideCove: {
      lat: 45.976098,
      lng: -123.946844,
    },
    laPush: {
      lat: 47.903230,
      lng: -124.633203,
    },
    zoom: 13,
  }

  seasideCoveIcon = L.icon({
    iconUrl:'surfboard-icon.png',
    iconSize:     [25, 41],
    iconAnchor:   [12.5, 41],
    popupAnchor:  [0, -41],
  });

  laPushIcon = L.icon({
    iconUrl:'surfboard-icon.png',
    iconSize:     [25, 41],
    iconAnchor:   [12.5, 41],
    popupAnchor:  [0, -41],
  })

  render(){
    const positionSeasideCove = [this.state.seasideCove.lat, this.state.seasideCove.lng];
    const positionLaPush = [this.state.laPush.lat, this.state.laPush.lng];

    return (
      <Map className={styles.Map} center={positionSeasideCove} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionSeasideCove} icon={this.seasideCoveIcon}>
          <Popup>
                Seaside Cove
          </Popup>
        </Marker>
        <Marker position={positionLaPush} icon={this.laPushIcon}>
          <Popup>
                La Push Cove
          </Popup>
        </Marker>

        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Map>
    );
  }
}

export default App;






  
