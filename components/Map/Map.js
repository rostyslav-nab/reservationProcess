import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import {useSelector} from "react-redux"
const Map = () => {
    const latitude = useSelector(state => state.place.place.geometry.coordinates[1])
    const longitude = useSelector(state => state.place.place.geometry.coordinates[0])
    const [viewport, setViewport] = useState({
        width: '900px',
        height: '500px',
        latitude,
        longitude,
        zoom: 18
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoiYmRlcHBvIiwiYSI6ImNrZ2N0aDJvMTAxMDYycnM0bzRmcndnbXAifQ.escrd3XYhRd83AfE2tnA6Q"
            onViewportChange={(viewport) => setViewport(viewport)}
            {...viewport}
        >
            <Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-32.png"
                     alt="marker"/>
            </Marker>
        </ReactMapGL>
    )
}

export default Map
