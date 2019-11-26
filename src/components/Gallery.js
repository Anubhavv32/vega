import React, { Component } from 'react'
import edit from './edit.svg';
import EditImage from './EditImage';
import axios from 'axios';
import {GalleryStyled} from './galleryStyle';

export default class Gallery extends Component {
    constructor(){
        super()
        this.state ={
          iptdata:"",
          picture:"",
          galleryBar:true,
          editBar:false,
          shapeBar:false,
          captionBar:false,
        }
      }
      inputHandler=(e)=>{
    this.setState({iptdata:e.target.value})
    console.log("input",this.state.iptdata)
      }
      searchHandler=(e)=>{
        e.preventDefault()
        console.log("input",this.state.iptdata) 
      axios.get('https://api.pexels.com/v1/search?per_page=20&query='+this.state.iptdata,
      {headers:{
        'Authorization':'563492ad6f91700001000001c27b7f11d7e24960bf45844863657b9c'
      }})
      .then((res)=>{
        if(res.data && res.status == 200){
          console.log("res111",res.data["photos"])
          this.setState({picture:res.data["photos"]})
    
        }
      })
      .catch((err)=>{

      })
      }
      captionHandler=(src)=>{
        this.setState({editBar:true,galleryBar:false,edtimg:src,captionBar:true})
      }
      shapeHandler=(src)=>{
        this.setState({editBar:true,galleryBar:false,edtimg:src,shapeBar:true})
      }
      returnBack=()=>{
        this.setState({editBar:false,galleryBar:true,shapeBar:false,captionBar:false})
      }
    render() {
        return (
          <GalleryStyled>
            <div  className="mainbox">
            <div className="intro">
              <span>Anubhav Sharma</span>
              <span>anubhavk.258@gmail.com</span>
            </div>
            {  
        this.state.galleryBar && <div className="searchbar">
            <div className='wrapper'>
      <form className="search-container">
      <div className="input-group mb-4 border rounded-pill p-1">
                <input type="search" placeholder="What're you searching for?" onChange={this.inputHandler} aria-describedby="button-addon3" 
                className="form-control bg-none border-0" />
                <div className="input-group-append border-0">
                  <button id="button-addon3" type="button" onClick={this.searchHandler} className="btn btn-link text-success"><i class="fa fa-search"></i></button>
                </div>
              </div>
    
      </form>
    
    </div>
            </div>}
        {  
        this.state.galleryBar && 
        <div className="container">
        {Array.isArray(this.state.picture) ? this.state.picture.map((item,i)=>{
    return(
    <div className="card" style={{width:"24%",height:"50vh"}}>
    
    <img className="card-img-top"src={item["src"]["medium"] } alt="Card image" style={{width:"100%",height:"45vh"}}/>
    <div className= "edt-btn">
    <button className="btn btn-primary"  onClick={()=>{this.captionHandler(item["src"]["medium"])}}>Add Caption</button>
    <button className="btn btn-primary"  onClick={()=>{this.shapeHandler(item["src"]["medium"])}}>Add Shape</button>
    </div></div>
    )
        })
        :null}
      </div>
            }
    
          
    
            {this.state.editBar && 
            <div>
           <button onClick={this.returnBack} className="return">Return Back</button>
           <EditImage img = {this.state.edtimg} shapeBar={this.state.shapeBar} captionBar={this.state.captionBar} />
    </div>
           }
          </div></GalleryStyled>
        )
    }
}
