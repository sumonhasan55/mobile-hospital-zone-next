/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
'use client' 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ location }) => {
  const { lat, lng } = location;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px', width:"full" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
