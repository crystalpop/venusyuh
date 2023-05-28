import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <div><p className="my-h3"> Computer Science </p>
    <div> <p className="homep"> Computer Science is a dynamic and rapidly evolving field of study that focuses on the theory, design, and development of computer systems and software. As a major, it encompasses a broad range of topics, including algorithms, programming languages, data structures, artificial intelligence, and computer networks. Students learn problem-solving skills, programming languages, and software development methodologies. Computer science majors gain expertise in areas such as software engineering, data analysis, cybersecurity, and machine learning. They play a vital role in developing innovative technologies, creating software applications, and advancing fields like artificial intelligence and data science. Computer science majors find opportunities in industries such as technology, finance, healthcare, gaming, and cybersecurity, contributing to advancements in computing and shaping the future of technology-driven society.</p></div>
    <div className="video-responsive">
    <iframe width="700" height="450" src="https://www.youtube.com/embed/aq0K7an4FJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
     </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
// const major = {"Biological Sciences":"biosci","Genetics":"genetics", "Neurobiology":"neurobio", "Biochemistry and Molecular Biology":"biochem",
// "Physics":"physics","Chemistry":"chem","Mathematics":"math", "Earth Systems Science":"ess", 
// "Chemical Engineering":"chemE","Civil Engineering":"civilE", "Electrical Engineering":"elecE","Computer Engineering":"compE","Biomedical Engineering":"biomedE", "Environmental Engineering":"envirE", "Materials Science":"materialsE","Mechanical Engineering":"mechE",
// "Computer Science":"cs", "Data Science":"data", "Game Design and Interactive Media":"game", "Informatics":"inf", "Software Engineering":"swe"}

// function Video(){
//     const location = useLocation();
//     const [videoURL, setVideoURL] = useState("");
//     const [majorDescription, setDescription] = useState("");

//     async function getVideo() {
//         const params = new URLSearchParams(location.search);
//         const response = await fetch(`http://127.0.0.1:8000/${major[params.get("major")]}`)
//         const new_URL = await response.json()
//         const descriptionResponse = await fetch(`http://127.0.0.1:8000/major/${major[params.get("major")]}`)
//         const new_Description = await descriptionResponse.text()
//         setVideoURL(new_URL);
//         setDescription(new_Description);
//     }

//     useEffect(() => {
//         getVideo();
//     })

//     return videoURL
// }