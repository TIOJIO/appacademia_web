import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
//import PanelHeader from "components/PanelHeader/PanelHeader.js";
import React ,{useEffect} from 'react';
import Footer from '../components/Footer/Footer'
import LoginAdmin from './LoginAdmin/LoginAdmin'




const Admin = (props) => {
  
 
    return (
  
      <div style={{ backgroundColor:'#d3d0d0'}}>
                  <LoginAdmin/>
                 
    </div>
     
    );
  
}

export default Admin;

















