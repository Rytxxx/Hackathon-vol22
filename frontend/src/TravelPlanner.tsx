// import React from "react";
// import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";

// interface Props {
//   directions?: google.maps.DirectionsResult;
// }
// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 35.6895, // 東京の緯度
//   lng: 139.6917, // 東京の経度
// };

// const MapComponent: React.FC<Props> = ({ directions }) => {
//   return (
//     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//       {directions && <DirectionsRenderer directions={directions} />}
//     </GoogleMap>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <MapComponent />
//     </LoadScript>
//   );
// };

// export default App;
