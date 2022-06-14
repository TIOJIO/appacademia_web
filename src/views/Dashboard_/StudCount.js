

import React, {Component} from "react";
import API  from '../axios/Api';
import { makeStyles } from '@material-ui/core/styles';
import CountStudents from "./CountStudents"
import axios from 'axios'


const useStyles = makeStyles({
  main : {
    color:'white',
    fontWeight:"bold",
    textAlign:"center",
    padding:"10px"
  }

})


 class Views extends Component {
   state ={
     mhs :[]
   }
   componentDidMount = async ()=>{
      await axios.get("http://localhost/back-end/students/count_students.php")
      .then(response => this.setState({
        mhs: response.data
      }))
   } 
    render(){
       const renderData = this.state.mhs.map(mhs => {
         return (

                  <CountStudents mhs={mhs}  key={mhs.id} refresh={this.componentDidMount}/>

         
         )
       });

       
       
       
       return(
           <div>
             
                      {renderData}

                    
                   
           </div>
       )
    }
}
 export default Views;


















