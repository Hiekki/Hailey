'use client';

import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function RadarMap() {
    return (
        <MapContainer center={[39.8283, -98.5795]} zoom={4} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <WMSTileLayer
                url='https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows'
                layers='conus_bref_qcd'
                format='image/png'
                transparent={true}
                version='1.1.1'
            />
        </MapContainer>
    );
}
