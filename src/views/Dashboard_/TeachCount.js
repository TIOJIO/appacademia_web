

import React, {Component} from "react";
import API  from '../axios/Api';
import { makeStyles } from '@material-ui/core/styles';
import CountTeachers from "./CountTeachers"
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
      await axios.get("http://localhost/back-end/teachers/count_teachers.php")
      .then(response => this.setState({
        mhs: response.data
      }))
   } 
    render(){
       const renderData = this.state.mhs.map(mhs => {
         return (

                  <CountTeachers mhs={mhs}  key={mhs.id} refresh={this.componentDidMount}/>

         
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


















