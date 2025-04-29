import React, { useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Container, Typography, Paper, Box, TextField, Button } from '@mui/material';

function Hospitals() {
  const majorHospitals = useMemo(() => [
    {
      name: 'UNC Hospitals Comprehensive Stroke Center',
      lat: 35.9040219,
      lng: -79.0516151,
    },
    {
      name: 'Duke University Hospital – Comprehensive Stroke Center',
      lat: 36.0075097,
      lng: -78.9384272,
    },
    {
      name: 'UNC Rex Healthcare – Comprehensive Stroke Center',
      lat: 35.8341956,
      lng: -78.7001898,
    },
    {
      name: 'WakeMed Raleigh Campus – Thrombectomy-Capable Stroke Center',
      lat: 35.7842744,
      lng: -78.5885902,
    }
  ], []);

  useEffect(() => {
    if (L.DomUtil.get('map') !== null) {
      L.DomUtil.get('map')._leaflet_id = null;
    }

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

    const map = L.map('map').setView([40, -90], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);

    majorHospitals.forEach(hospital => {
      const marker = L.marker([hospital.lat, hospital.lng]).addTo(map);
      marker.bindTooltip(hospital.name);

      marker.on('click', function () {
        this._map.setView(this.getLatLng(), 10);
      });
    });

    fetch('https://jonathantweedy.com/work/CHIP/api/sample_hospitals.json')
      .then(response => response.json())
      .then(hospitals => {
        hospitals.forEach(hospital => {
          const marker = L.marker([hospital.latitude, hospital.longitude]);
          marker.addTo(map);
          marker.bindTooltip(hospital.hospital);

          const popupcontent = document.createElement('div');

          const btn = document.createElement('button');
          btn.innerHTML = '[X]';
          popupcontent.append(btn);
          btn.addEventListener('click', function () {
            if (window.confirm('Sure you want to remove this marker?')) {
              this._map.removeLayer(this);
            }
          }.bind(marker));

          const p = document.createElement('p');
          popupcontent.append(p);
          p.innerHTML = `${hospital.hospital}<br />${hospital.latitude}, ${hospital.longitude}`;

          marker.bindPopup(popupcontent);

          marker.on('click', function () {
            this._map.setView(this.getLatLng(), 6);
          });
        });
      })
      .catch(error => console.error('Error loading hospitals:', error));
  }, [majorHospitals]);

  return (
    <div>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4, color: '#b71c1c' }}>
          Find Stroke Centers Near You
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField fullWidth placeholder="Enter your location…" variant="outlined" />
          <Button variant="contained" color="primary">Search</Button>
        </Box>

        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', mb: 4 }}>
          <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </Paper>

        <Typography variant="h6" gutterBottom>Stroke Centers</Typography>
        {majorHospitals.map(h => (
          <Paper key={h.name} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{h.name}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>{h.lat}, {h.lng}</Typography>
            <Button
              variant="outlined"
              size="small"
              color="error"
              href={`https://www.google.com/maps/dir/?api=1&destination=${h.lat},${h.lng}`}
              target="_blank"
            >
              Get Directions
            </Button>
          </Paper>
        ))}
      </Container>
    </div>
  );
}

export default Hospitals;
