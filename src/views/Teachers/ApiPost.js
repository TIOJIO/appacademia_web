

/*
import React,{ useState } from 'react';
import Axios from 'axios'

function PostForm(){
    const url ="https://djangui.net/mysalary/createbusiness_employe_authenticate"
    const [data ,setData]=useState({
        username:"",
        phone:"",
        first_name:"",
        last_name:"",
        password:""
        
    })
     const topic="my_djangui_pay07472410";
     const business_id = "173";
    const business_key  ="26777318";
     const is_web_version ="1";

      function submit(e){
           e.preventDefault()
           let fromdata=({topic,business_id,business_key,is_web_version,username,phone,first_name,last_name,password});
          try {
            Axios.post(url,{
                body:JSON.stringify({fromdata }),
                
                headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json',
                },
                
              
            })
            .then(res=>{
                console.log(res.data)
           })
             
             alert("succesfull")
             
          }catch(e){
              alert("error")
              console.log(e)
          }
      
    }
    function handle(e){
        const  newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

      return(
        <div>
            <form onSubmit={(e)=>submit(e)}>
            
                <input type="text" onChange={(e)=> handle(e)} id="username" value={data.username} placeholder='username...'/><br></br><br></br>
                <input type="number" onChange={(e)=> handle(e)} id="phone" value={data.phone} placeholder='phone...'/><br></br><br></br>
                <input type="text" onChange={(e)=> handle(e)} id="first_name" value={data.first_name} placeholder='first_name...'/><br></br><br></br>
                <input type="text" onChange={(e)=> handle(e)} id="last_name" value={data.last_name} placeholder='last_name...'/><br></br><br></br>
                <input type="password" onChange={(e)=> handle(e)} id="password" value={data.password} placeholder='password...'/><br></br><br></br>
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostForm;
*/







import React,{ useState } from 'react';
import Axios from 'axios'

function PostForm(){
    const url ="https://djangui.net/mysalary/createbusiness_employe_authenticate"
    const [data ,setData]=useState({
        username:"",
        phone:"",
        first_name:"",
        last_name:"",
        password:""
        
    })
      function submit(e){
           e.preventDefault()
          try {
            Axios.post(url,{
                method:'post',
                Origin: 'http://localhost:3000',
                mode :'no-cors',
                headers:{
    
                   'Access-Control-Allow-Headers' : 'origin, content-type, accept, authorization',
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    'Access-Control-Allow-Origin' : '*',
                    'Content-type':'application/json',
                    'Accept':'application/json',
                   

                },
              
                body: JSON.stringify({
                topic:"my_djangui_pay07472410",
                business_id :"173",
                business_key :"26777318",
                is_web_version:"1",
                username:data.username,
                phone: parseInt(data.phone),
                first_name:data.first_name,
                last_name:data.last_name,
                password:data.password
                })
              
            })
            .then(res=>{
                console.log(res.data)
           })
             
             alert("succesfull")
             
          }catch(e){
              alert("error")
              console.log(e)
          }
      
    }
    function handle(e){
        const  newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

      return(
        <div>
            <form onSubmit={(e)=>submit(e)}>
            
                <input type="text" onChange={(e)=> handle(e)} id="username" value={data.username} placeholder='username...'/><br></br><br></br>
                <input type="number" onChange={(e)=> handle(e)} id="phone" value={data.phone} placeholder='phone...'/><br></br><br></br>
                <input type="text" onChange={(e)=> handle(e)} id="first_name" value={data.first_name} placeholder='first_name...'/><br></br><br></br>
                <input type="text" onChange={(e)=> handle(e)} id="last_name" value={data.last_name} placeholder='last_name...'/><br></br><br></br>
                <input type="password" onChange={(e)=> handle(e)} id="password" value={data.password} placeholder='password...'/><br></br><br></br>
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default PostForm;




