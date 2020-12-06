import { useContext } from 'react'
import { GlobalContext } from 'context/GlobalContext'

import './Map.sass'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const ChangeView = ({ center }) => {
    const map = useMap()
    map.setView(center)
    return null
}

const Map = () => {
    const { state } = useContext(GlobalContext)

    return (
        <MapContainer center={ state.location } zoom={ 13 }>
            <ChangeView center={ state.location } />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={state.location}>
                <Popup>
                    Hey
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
