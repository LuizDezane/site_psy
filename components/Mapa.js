import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Map = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.2313118971115!2d16.989825415950058!3d51.122641246582376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fea0688a7b31d%3A0xc9327d336ac153ae!2sBia%C5%82owieska%203a%2F5d%2C%2054-234%20Wroc%C5%82aw%2C%20Poland!5e0!3m2!1sen!2suk!4v1668956189204!5m2!1sen!2suk"
                width="100%" height="100%" />
        </div>
    )
}

export default Map