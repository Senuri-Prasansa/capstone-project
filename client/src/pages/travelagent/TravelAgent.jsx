// eslint-disable-next-line no-unused-vars
import React from 'react';
import Travel from '../../components/Travel.jsx';
import './travelagent.css';
import Doo from '../../assets/Images/123travel.jpg';
import DooImage from '../../assets/Images/360tours .jpg';
import { Row, Col } from 'react-bootstrap';
import Navigate from '../../components/Navigate'
import Footer from '../../components/footer/Footer.jsx';

const travelAgents =[{
image : Doo, 
companyName : '123 Travels (private) Limited',
address : '81/35, center road,thalpitiya north,wadduwa.',
web : 'https://123travels.org/',
registrationNo :'SLTDA/SQA/TA/02230',
licenseNo :'TA/2023/0256',
validityStatusOfLicense :'Expired on 31st December 2024',
district :'All Island',
telephone :'0717704916',
},
{
image : DooImage, 
companyName : '360 Tours Lanka',
address : 'No. 4/4, 1/1, hotel road, mount lavina.',
web : 'https://360tourslanka.com/',
registrationNo :'SLTDA/SQA/TA/01969',
licenseNo :'TA/2020/0054',
validityStatusOfLicense :'Expired on 31st December 2024',
district :'Gampaha',
telephone :'0117213935',
}
];

function TravelAgent() {
  return (
    <div className='travel-agents'>
    <Navigate></Navigate>
      <Col>
        <Row>
          <h2 className='agent'><b>Choose Your Travel Agent</b></h2>
          {travelAgents.map((travelAgent) => (
            <Travel key={travelAgent.companyName} {...travelAgent} />
          ))}
        </Row>
      </Col>
      <Footer></Footer>
    </div>
  );
}

export default TravelAgent;
