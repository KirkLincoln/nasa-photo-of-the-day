import React, { useEffect, useState } from "react";
import styled from 'styled-components';

export default function Photo(image) {
    const ImageContainer = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    return (
        <ImageContainer>
            <img src={image.src.src.hdurl} />
        </ImageContainer>
    )
}