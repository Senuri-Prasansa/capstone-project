// eslint-disable-next-line no-unused-vars
import React from 'react';
import Tour from '../../components/Tour.jsx';
import './tourguides.css';
import Doo1 from '../../assets/Images/man1.jpg';
import DooImage1 from '../../assets/Images/man2.jpg';
import { Row, Col } from 'react-bootstrap';
import Navigate from '../../components/Navigate'
import Footer from '../../components/footer/Footer.jsx';

const tourGuide =[{
image : Doo1, 
guideName : "P. DUMINDA SAMARAKOON",
category : "Chauffeur",
languages : "English",
telephone : "0714483643",
address : "No. 224, akarawita, gampaha.",
registrationNo : "C-1013",
email : "dumindasamarakoon1@gmail.com",
validityStatusOfLicense : "Valid till 31st December 2025",
},
{
image : DooImage1, 
guideName : "N.N. GUNATILLAKE",
category : "National",
languages : "English",
telephone : "0777234642",
address : "No. 74/10 , galle road , waskaduwa.",
registrationNo : "N-0890",
email : "navingunatilleke70@gmail.com",
validityStatusOfLicense : "Valid till 31st December 2025",
}
];

function TourGuide() {
  return (
    <div className='tour-guides'>
    <Navigate></Navigate>
      <Col>
        <Row>
          <h2 className='agent1'><b>Choose Your Tour Guide</b></h2>
          {tourGuide.map((tourGuide) => (
            <Tour key={tourGuide.guideName} {...tourGuide} />
          ))}
        </Row>
      </Col>
      <Footer></Footer>
    </div>
  );
}

export default TourGuide;
