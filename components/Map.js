import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Map = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4374984915826!2d-46.98931972390092!3d-22.97093424016825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd8f6101ee25%3A0xe13310780658ce0!2sR.%20Eliana%20de%20Castro%2C%20136%20-%20Jardim%20Monte%20Verde%2C%20Valinhos%20-%20SP%2C%2013275-060!5e0!3m2!1spt-BR!2sbr!4v1703984379289!5m2!1spt-BR!2sbr"
                width="100%" height="100%" />
        </div>
    )
}

export default Map