import React, { useEffect, useState } from "react";

export default function Photo(image) {
    useEffect(() => {}, [image]);
    console.log(image)
    return (
        <div>
            {/* ._. */}
            <img src={image.src.src.hdurl} />
        </div>
    )
}