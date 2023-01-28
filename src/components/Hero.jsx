import React from 'react'
import Songs from "./Songs"
import Navbar from './Navbar'
import Photos from "./Photos"
import Biography from "./Biography"
import Footer from './Footer'

const Hero = () => {
    // https://lh3.googleusercontent.com/W_yOqnKSDYyeVOY_AsXhuAtb6rW3vCL3GtJ9DA1GxWOrJfyeSOqzvTv_TkFHijdkVPXWutASBlRFPg=w2456-h1023-p-l90-rj
    return (

        <>

            <div className="">
                <div className="w-full min-h-screen absolute ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznI0xHbtQuk7zfpSw_Bk40_FMEk8m8KnoEA&usqp=CAU"
                        alt="Hero img"
                        className="w-full md:max-h-screen min-h-screen  "
                    />
                </div>
                <div className="relative  min-h-screen">
                    <Navbar />
                    <div className="   max-w-screen  flex ">

                        <div className=" w-full md:flex md:flex-row  mt-96 md:mt-56 justify-end md:mr-32  bg-blend-darken ">

                            <div className=" md:w-1/2 lg:w-1/2 ml-12  md:mt-9 ">
                                <h1 className="font-bold text-3xl md:text-6xl drop-shadow-2xl lg:text-8xl text-red-800 ">Arjit Singh.</h1>
                                <h4 className="font-medium md:mt-5 text-lg  text-gray-400">1987 - present</h4>
                                <p className="my-4 pr-4  text-white">Arijit Singh is an Indian singer and music composer. The recipient of several accolades including a National Film Award and six Filmfare Awards, he has recorded songs in several Indian languages and has established himself as one of the leading playback singers of Bollywood. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Songs id="songs" />
                <Photos id="photos" />
                <Biography id="biography" />
                <Footer />
            </div>

        </>
    )
}



export default Hero;
