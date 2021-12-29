import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
  },
  map: {
    height: '600px',
    width: '100%',
  },
});

const Map = ({ lat, lng }) => {
  const classes = useStyles();

  const { isLoaded } = useJsApiLoader({
    id: 'map',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  const handleOnLoad = useCallback(
    (map) => {
      const maps = window.google.maps;
      const location = new maps.LatLng(lat, lng);
      const service = new maps.places.PlacesService(map);

      const setMapMarker = (results) => {
        const [place] = results;

        const marker = new maps.Marker({
          title: place?.name,
          label: place?.name,
          visible: true,
          place: {
            location: place?.geometry?.location,
            placeId: place?.place_id,
          },
        });

        marker.setMap(map);
      };

      service.nearbySearch(
        {
          location,
          rankBy: maps.places.RankBy.DISTANCE,
          type: 'library',
        },
        setMapMarker
      );
    },
    [lat, lng]
  );

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div className={classes.container}>
      <GoogleMap
        mapContainerClassName={classes.map}
        center={{ lat, lng }}
        zoom={10}
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default Map;
