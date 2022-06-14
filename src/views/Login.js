import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
//import PanelHeader from "components/PanelHeader/PanelHeader.js";
import React ,{useEffect} from 'react';
import Students from './Students';
import {useHistory} from 'react-router-dom';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";




const Login = (props) => {
  let history=useHistory(); 
     
  const mySubmitHandler = e => {

    history.push('admin/dashboard');
   
  }
 
    return (

     
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardBody>
                  <div className="typography-line">
  
                    <h1>
                      Login
                    </h1>
                     
                    <form onSubmit={mySubmitHandler}>
      <h1>Hello ancien </h1>
     
      <input
        type='text'
    
      />
      <input
        type='submit'
      />
      </form>
     <a href="/admin/dashboard">login</a>
                   
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
     
    );
  
}

export default withRouter(Login);

















