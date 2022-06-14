
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import Attendance from './Attendance/Attendance';

function Typography() {
  return (
     <>
      <PanelHeader size="sm" />
      <div className="content">
                   
                       <Attendance/>
      </div>
    </>
   
  );
}

export default Typography;
