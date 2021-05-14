import React, { useEffect, useState } from "react";
import PhotoFrame from "./PhotoFrame";
import Photo from "./Photo";
import axios from "axios";


export default function NasaPhotoOfTheDay(props) {
    const [image, setImage] = useState("");
    const [hdurl, setHdurl] = useState(undefined);

    useEffect(() => {
        //this should be in the .env file and then hidden in .gitignore
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=8JQ2ckKvfc0pf0Q1aEhnebUlz3RXMHEXL0Pch2by`)
          .then(function (response) {
            // handle success
            console.log(response.data);
            response.data.hdurl !== undefined ? setHdurl(response.data.hdurl) : console.log("Error: hdurl is not present within response");
            setImage({
                    "copyright": response.data.copyright,
                    "date": response.data.date,
                    "explanation": response.data.explanation,
                    "hdurl": response.data.hdurl,
                    "media_type": response.data.media_type,
                    "service_version": response.data.service_version,
                    "title": response.data.title,
                    "url": response.data.url
            })
            console.log(image)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }, [hdurl])

    return (
        <PhotoFrame src={image} />
    )
}
