import React from 'react'
import './Intro.css'
import intro from "../assets/NetflixIntro.mp4"

const Intro = ({showIntro}) => {
  return (
    <>
        {showIntro &&
          <div className='intro__div'>
            <video src={intro} autoPlay muted></video>
          </div>
        }
    </>
  )
}

export default Intro