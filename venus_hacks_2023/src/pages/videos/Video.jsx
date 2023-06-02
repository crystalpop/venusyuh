import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ major, description, url }) =>
    (
    <div><p className="my-h3"> {major} </p>
    <div> <p className="homep"> {description}</p></div>
    <div className="video-responsive">
        <iframe width="700" height="450" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
     </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

const major_dict = {"Biological Sciences":"biosci","Genetics":"genetics", "Neurobiology":"neurobio", "Biochemistry and Molecular Biology":"biochem",
"Physics":"physics","Chemistry":"chem","Mathematics":"math", "Earth Systems Science":"ess", 
"Chemical Engineering":"chemE","Civil Engineering":"civilE", "Electrical Engineering":"elecE","Computer Engineering":"compE","Biomedical Engineering":"biomedE", "Environmental Engineering":"envirE", "Materials Science":"materialsE","Mechanical Engineering":"mechE",
"Computer Science":"cs", "Data Science":"data", "Game Design and Interactive Media":"game", "Informatics":"inf", "Software Engineering":"swe"}

export default function Video(){
    const [searchParams] = useSearchParams();
    const [videoURL, setVideoURL] = useState("");
    const major = searchParams.get("major")

    async function getVideo() {
        const response = await fetch(`http://127.0.0.1:8000/${major_dict[major]}`)
        const new_URL = await response.json()
        setVideoURL(new_URL);
    }

    useEffect(() => {
        getVideo();
    }, [searchParams])
    
    console.log(videoURL)
    return YoutubeEmbed({major, url: videoURL})
}