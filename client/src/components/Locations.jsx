import { useState } from 'react'
import { useEffect } from 'react'

const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch("/api/locations", {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.locations && Array.isArray(result.locations)) {
                setLocations(result.locations)
            } else {
                console.error('There is an error')
                setLocations([])
            }
             
        })
        .catch(console.error)
    }, [])
    console.log(locations)
}

export default Locations