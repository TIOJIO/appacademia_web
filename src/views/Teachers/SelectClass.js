import React, {Component} from "react";
import API  from '../axios/Api';
import { makeStyles } from '@material-ui/core/styles';
import TestCount from './TestCount';
import SelectView from "./SelectView"
import TextField from '@mui/material/TextField';
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
      await axios.get("http://localhost/back-end/classes/view_select.php")
      .then(response => this.setState({
        mhs: response.data
      }))
   } 
    render(){
       const renderData = this.state.mhs.map(mhs => {
         return (

                  <SelectView mhs={mhs}  key={mhs.id} refresh={this.componentDidMount}/>

         
         )
       });

       
       
       
       return(
           <div>

        
                  <select style={{fontFamily: "Times New Roman, Times, serif",width:"100%",borderRadius:'5px',border:"0px 0px 1px 0px solid black",height:"60px"}}> 
                  <option style={{fontFamily: "Times New Roman, Times, serif"}} value="">classes disponibles</option>
                            {renderData}
                  </select>

                   
           </div>
       )
    }
}
 export default Views;












