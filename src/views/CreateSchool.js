import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
//import PanelHeader from "components/PanelHeader/PanelHeader.js";
import React ,{useEffect} from 'react';
import Footer from '../components/Footer/Footer'
import CreateSchool from './CreateSchool/CreateSchool'
import {TextField, Grid,Button,Container,Typography,Paper} from '@material-ui/core';





const Admin = (props) => {
  
 
    return (
  
      <div style={{ backgroundColor:'#d3d0d0'}}>
          <Container>
               <CreateSchool/>
          </Container>
                  
                <p>.</p>
    </div>
     
    );
  
}

export default Admin;

















