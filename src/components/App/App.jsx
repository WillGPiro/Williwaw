// // // @flow

// import React from 'react';
// import SimpleExample from '../SimpleExample/simple.js';

// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>React-Windy-Leaflet examples</h1>
//       <h2>Popup with Marker</h2>
//       <SimpleExample />
//     </React.Fragment>
//   );
// };

// export default App;



import React, { Component } from 'react';
// import Routes from '../Router/Routes.jsx';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './App.css';
import WashingtonSR from '../Washington Report/WashingtonSR';
import WashingtonSRList from '../Washington Report/WashingtonSRList';
import SurfReport from '../../Containers/SurfReport';

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

  attributions = {
    flaticon: <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>,
    openstreetmap: <a href="http://osm.org/copyright">OpenStreetMap</a>
  }

  render(){
    // const positionSeasideCove = [this.state.seasideCove.lat, this.state.seasideCove.lng];
    // const positionLaPush = [this.state.laPush.lat, this.state.laPush.lng];
    const washingtonSurfList = [{
      'timestamp':'1594285200',
      'localTimestamp':'1594252800',
      'issueTimestamp':'1594274400',
      'fadedRating':'0',
      'solidRating':'1',
      'swell':'absMinBreakingHeight: 1.69',
      'wind':'speed: 7',
      'condition':'pressure: 1017',
      'charts':'swell: https://charts-s3.msw.ms/archive/wave/750/16-1594285200-1.gif'
    }, {
      'timestamp':'1594285200',
      'localTimestamp':'1594252800',
      'issueTimestamp':'1594274400',
      'fadedRating':'0',
      'solidRating':'1',
      'swell':'absMinBreakingHeight: 1.69',
      'wind':'speed: 7',
      'condition':'pressure: 1017',
      'charts':'swell: https://charts-s3.msw.ms/archive/wave/750/16-1594285200-1.gif'
    }
    ];
    return (
    // <Map className={styles.Map} center={positionSeasideCove} zoom={this.state.zoom}>
    //   <TileLayer
    //     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <TileLayer
    //     attribution='Icons by &amp;copy <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> '
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={positionSeasideCove} icon={this.seasideCoveIcon}>
    //     <Popup>
    //           Seaside Cove
    //     </Popup>
    //   </Marker>
    //   <Marker position={positionLaPush} icon={this.laPushIcon}>
    //     <Popup>
    //           La Push Cove  
    //     </Popup>
    //   </Marker>
    // </Map>
    // <WashingtonSR  
    //   timestamp="1594285200"
    //   localTimestamp="1594252800"
    //   issueTimestamp="1594274400"
    //   fadedRating="0"
    //   solidRating="1"
    //   swell="absMinBreakingHeight: 1.69"
    //   wind="speed: 7"
    //   condition="pressure: 1017"
    //   charts="swell: https://charts-s3.msw.ms/archive/wave/750/16-1594285200-1.gif" />
      
      <SurfReport />
    );
  }
}

export default App;






  
