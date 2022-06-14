import React , {Component} from 'react';
 

 class Uplord extends React.Component{
     constructor(props){
     super(props);
     this.state={
         image:null
     };
 this.onImageChange=this.onImageChange.bind(this);
    }
    onImageChange= (event) => {
        if(event.target.files && event.target.files[0]){
            let img =event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
                
            });
           
        }
    };
    render(){
        return(
            <div>
                <div>
                   <div>
                    <img style={{width:"100px",height:"110px",borderRadius:"100%",boxShadow:"1px 1px 2px 2px rgba(95, 99, 96, 0.267)"}} src={this.state.image} />
                    <br/><br/>
                       <input style={{color:"transparent"}} type="file" name="myImage" onChange={this.onImageChange} />
                    </div> 
                </div> 
             </div> 
        );
    }
}

export default Uplord;