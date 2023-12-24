import { FC } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapComponentProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

const MapComponent: FC<MapComponentProps> = ({ coordinates }) => {
  const mapContainerStyle = {
    width:  '100%',
    height: '400px',
  };

  const center = {
    lat: coordinates.lat,
    lng: coordinates.lng,
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    // Handle the case where API key is undefined
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    <section className=''>
      <LoadScript googleMapsApiKey={googleMapsApiKey} >
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

export default MapComponent;

