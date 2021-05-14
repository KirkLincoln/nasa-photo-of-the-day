import React, { useState, useEffect } from 'react';
import Photo from "./Photo";

const PhotoFrame = image => {    

    return(
        <Photo src={image} alt="explain"/>
    )
}

export default PhotoFrame;