import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


function Footer() {

    return (
        <MDBFooter color="blue my_foot" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">My Portfolio</h5>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:Tharshz07
            </MDBContainer>
          </div>
        </MDBFooter>
      );
    }

export default Footer;