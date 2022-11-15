import logo from './logo.svg';
import './App.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import RoutineMachine from "./RoutineMachine";
function App() {
  return (
    <div className="App">
      <MapContainer id="map" mapId={'map'} center={[54.864, 83.081]} zoom={15} scrollWheelZoom={false} zoomControl={false} doubleClickZoom={false} dragging={false} style={{ width: "100%", height: "100vh" }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <RoutineMachine />
      </MapContainer>
    </div>
  );
}

export default App;
