import { useState } from "react"
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const { majors } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Majors Offered
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {majors.map((major) => (
            <Link to={`/major-video?major=${major}`} style={{ display: "block" }}>{major}</Link>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Start() {
    const [BioSciHovered, SetBioSciHover] = useState(false)
    const [PhysSciHovered, SetPhysSciHover] = useState(false)
    const [EngineeringHovered, SetEngineeringHover] = useState(false)
    const [ICSHovered, SetICSHover] = useState(false)
    const [modalShowBio, setModalShowBio] = useState(false);
    const [modalShowPhy, setModalShowPhy] = useState(false);
    const [modalShowEng, setModalShowEng] = useState(false);
    const [modalShowICS, setModalShowICS] = useState(false);


    return (
        <div>
            <div className="my-h2">Pick an area of interest!</div>

            <MyVerticallyCenteredModal
        majors={["Biological Sciences", "Genetics", "Neurobiology", "Biochemistry and Molecular Biology"]}
        show={modalShowBio}
        onHide={() => setModalShowBio(false)}
      />
      <MyVerticallyCenteredModal
        majors={["Physics","Chemistry","Mathematics", "Earth Systems Science"]}
        show={modalShowPhy}
        onHide={() => setModalShowPhy(false)}
    />
    <MyVerticallyCenteredModal
        majors={["Chemical Engineering","Civil Engineering", "Electrical Engineering","Computer Engineering","Biomedical Engineering", "Environmental Engineering", "Materials Science","Mechanical Engineering"]}
        show={modalShowEng}
        onHide={() => setModalShowEng(false)}
        />

        <MyVerticallyCenteredModal
        majors={["Computer Science", "Data Science", "Game Design and Interactive Media", "Informatics", "Software Engineering"]}
        show={modalShowICS}
        onHide={() => setModalShowICS(false)}
        />
            <div className="my-container">
                <div className="my-card">
                    <img className="img" src="/src/assets/biologicalsciences.jpg" alt="Biological Sciences" onMouseOver={function hover1() { SetBioSciHover(prev => !prev)}} onMouseOut={() => {SetBioSciHover(prev => !prev)}}
                        onClick={() => setModalShowBio(true)}>
                    </img>
                    {BioSciHovered && <p className="cardp"><div className='bold'>Biological sciences</div> Encompasses scientific disciplines that study living organisms and their interactions with the environment. They include fields such as biology, genetics, microbiology, zoology, and botany. These disciplines explore the structure, function, evolution, and behavior of organisms, as well as their relationships with ecosystems and the natural world.</p>}
                </div>
                <div className="my-card">
                    <img className="img" src="/src/assets/physicalsciences.jpg" alt="Physical Sciences" onMouseOver={function hover2() { SetPhysSciHover(prev => !prev)}} onMouseOut={() => {SetPhysSciHover(prev => !prev)}}
                    onClick={() => setModalShowPhy(true)} ></img>
                    {PhysSciHovered && <p className="cardp"> <div className='bold'>Physical sciences</div>Studies matter, energy, and their interactions. They include physics, chemistry, astronomy, and earth sciences. These disciplines explore the fundamental principles that govern the natural world, focusing on the physical properties, behavior, and composition of the universe and our planet.</p>}
                </div>
                <div className="my-card">
                    <img className="img" src="/src/assets/engineering.jpg" alt="Engineering" onMouseOver={function hover1() { SetEngineeringHover(prev => !prev)}} onMouseOut={() => {SetEngineeringHover(prev => !prev)}}
                    onClick={() => setModalShowEng(true)}
                    ></img>
                    {EngineeringHovered && <p className="cardp"> <div className="bold">Engineering</div> It is the application of scientific and mathematical principles to design, develop, and improve technologies, systems, and structures. It involves utilizing knowledge in various fields, such as mechanical, electrical, civil, and chemical engineering, to create practical solutions and solve problems in industries ranging from aerospace and automotive to construction and telecommunications.</p>}
                </div>
                <div className="my-card">
                    <img className="img" src="/src/assets/computerscience.jpg" alt="Computer Science" onMouseOver={function hover1() { SetICSHover(prev => !prev)}} onMouseOut={() => {SetICSHover(prev => !prev)}}
                    onClick={() => setModalShowICS(true)}
                    ></img>
                    {ICSHovered && <p className="cardp"> <div className='bold'>Informatics</div>A broad field that encompasses the study of information and its processing. It includes areas such as computer science, information systems, and data science. Computer science specifically focuses on algorithms, programming, and the theoretical foundations of computing, while informatics explores the broader implications and applications of information in various domains.</p>}
                </div>
            </div>
        </div>
    )
}


export default Start