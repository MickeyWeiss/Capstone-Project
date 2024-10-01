import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
    return (
        <>
        <div id="welcome">
            <p>Welcome to my travel review website. Here you will be able to register and login to an account, read, rate and post reviews of varioius locations you and others have visited as well as delete reviews that you have created.</p>
        </div>
        <div id="home-image">
            <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="beach-picture"></img>
        </div>
        </>
    )
}

export default Home