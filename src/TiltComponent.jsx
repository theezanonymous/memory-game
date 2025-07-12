// Filename - TiltComponent.js

import React from 'react'
import Tilt from "react-parallax-tilt";


function TiltComponent({children}){
    return (
        <Tilt glareEnable={true} tiltMaxAngleX={20} 
        tiltMaxAngleY={30} perspective={1000} 
        glareColor={"none"}>
            <div className='tiltComponent'>
                {children}
            </div>
        </Tilt>
    )
}

export default TiltComponent;