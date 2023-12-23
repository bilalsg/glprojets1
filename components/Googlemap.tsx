"use client"
import { NextPage } from 'next';
import MapComponent from './MapComponent';

// Define the interface for GooglemapProps
interface GooglemapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Define the Googlemap component
const Googlemap: NextPage<GooglemapProps> = ({ coordinates }) => (
  <div>
    <h1>Your Page</h1>
    <MapComponent coordinates={coordinates} />
  </div>
);

// Define the getInitialProps function
Googlemap.getInitialProps = async () => {
  const coordinates = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return { coordinates };
};

// Export the Googlemap component as the default export
export default Googlemap;
