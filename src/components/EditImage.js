import React, { Component } from 'react';
import {EditStyled} from './editStyle.js';
import { fabric } from 'fabric';
import { saveAs } from 'file-saver';




var canvas = new fabric.Canvas('c');



export default class EditImage extends Component {
    constructor(){
        super()
        this.state ={
         
        }
    }
    dwnldHandler=(e)=>{
      var FileSaver = require('file-saver');
      var can = document.getElementById("c");
      var ctx=can.getContext("2d");
      var img=new Image()
img.onload=function(){
  ctx.fillStyle="red";
  ctx.drawImage(img,0,0);
  ctx.fillRect(100,100,50,30);
}
img.crossOrigin="anonymous";
console.log("img",img)
      can.toBlob(function(blob) {
          FileSaver.saveAssaveAs(blob, "fabric.png");
      });
        
    } 
        
       
    
    
    selectHandler=(e)=>{
      this.setState({shape:e.target.value})
    console.log("shape",this.state.shape,e.target)
    }
  
    addCircle=(e)=>{
      e.preventDefault()
  document.getElementById("c").innerHTML="";
      var imge = document.getElementById("img").src
      canvas = new fabric.Canvas('c');
      fabric.Image.fromURL(imge, function(img1){
  
        canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas), {
        
        
       })
       
      });
      canvas.add(new fabric.Circle({
        radius: 20, fill: 'red', left: 100, top: 100
     }));
    }
    
    componentDidMount(){
      console.log("aaaaaa", document.getElementById("img").src)
      var imge = document.getElementById("img").src
      
      fabric.Image.fromURL(imge, function(img1){
  
        canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas))
        canvas.add(img1);
      });
    }
    addText=(e)=>{
      e.preventDefault()
      var imge = document.getElementById("img").src
      canvas = new fabric.Canvas('c');
      fabric.Image.fromURL(imge, function(img1){
  
        canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas), {
        
        
       })
       
      });
      // canvas.setBackgroundImage(imge)
      
      canvas.add(new fabric.IText('Tap and Type', {
        left: 50,
        top: 100,
        fontFamily: 'helvetica neue',
        fill: '#000',
        stroke: '#fff',
        strokeWidth: .1,
        fontSize: 45
     }));
    }


    addTriangle=(e)=>{
      e.preventDefault()
      document.getElementById("c").innerHTML="";
      var imge = document.getElementById("img").src
      canvas = new fabric.Canvas('c');
      fabric.Image.fromURL(imge, function(img1){
  
        canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas), {
        
        
       })
       
      });
if(document.getElementById("tria")){
      canvas.add(new fabric.Triangle({
        width: 20, height: 30, fill: 'blue', left: 50, top: 50
     }));
    }
    else if(document.getElementById("recta")){
      canvas.add(new fabric.Rect({
        width: 20, height: 30, fill: 'green', left: 40, top: 30
     }));
    }
  }
    
    addRectangle=(e)=>{
      e.preventDefault()
      document.getElementById("c").innerHTML="";
     
      var imge = document.getElementById("img").src
      canvas = new fabric.Canvas('c');
      fabric.Image.fromURL(imge, function(img1){
  
        canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas), {
        
        
       })
       
      });
      canvas.add(new fabric.Rect({
        width: 20, height: 30, fill: 'blue', left: 50, top: 50
     }));
    }
  
returnBack=()=>{

}
    render() {
        return (
          <EditStyled>
            <div>
            
            
       { this.props.shapeBar  &&    <div className="container">
  
  <div className="card" style={{width:"40%"}}>
    <img id= "img" crossorigin="anonymous" className="card-img-top" src={this.props.img} alt="" style={{width:"100%"}}/>
   
   
      <div class="card-body">
      <form>
   
    <div class="form-group">
    <button  class="btn btn-primary" onClick = {this.addCircle}>Add Circle</button>
    <button  class="btn btn-primary" id="tria" onClick = {this.addTriangle}>Add Triangle</button>
    <button  class="btn btn-primary" id="rect" onClick = {this.addRectangle}>Add Rectangle</button>

    </div>
  </form>
    </div>
   
    </div>
  </div>}




  {   this.props.captionBar &&  <div className="container">
  
  <div className="card" style={{width:"40%"}}>
    <img crossorigin="anonymous" className="card-img-top" id= "img" src={this.props.img} alt="" style={{width:"100%"}}/>
     
      
    <div class="card-body">
      <form>
    <div class="form-group">
 
    <button  class="btn btn-primary" onClick = {this.addText}>Add Text</button>
    </div>
    
  </form>
    </div>
    </div>
  </div>}



  
  <div>
  <canvas id="c" crossorigin="anonymous" width="400" height="300"  ></canvas>
  {/* <a id="b"  crossorigin="anonymous" onClick={this.dwnldHandler}>Save</a> */}

  </div>


            </div></EditStyled>
        )
    }
}
