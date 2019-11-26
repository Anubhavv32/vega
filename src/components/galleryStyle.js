import styled from 'styled-components'

export const GalleryStyled = styled.div`

.container {
    display: inline-flex;
    width: 100%;
    flex-flow: wrap;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: 4%;
  }
  .return {
    margin-left: 43%;
    background: blue;
    border: none;
    border-radius: 6px;
    color: white;
  }
  .intro {
    text-align: center;
    display: inline-flex;
    flex-flow: column-reverse;
    margin-left: 40%;
  }
  .card {
    margin-bottom: 50px;
    margin-right: 1%;
  }
  
  img.img-car {
    width: 100% !important;
    height: 100% !important;
   
  }
  .img-div {
    width: 24%;
    height: 60vh;
  }
  img.edt-btn {
    height: 9%;
  }
  .mainbox {
    margin: 0%;
    width: 100%;
  }
  
  
  button.search-button {
    color: transparent;
    border: none;
    outline: none;
  }
  
  
  
  
  
  
  
  .search-container{
    width: 490px;
    display: block;
    margin: 0 auto;
  }
  
  input#search-bar{
    margin: 0 auto;
    width: 100%;
    height: 45px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #D0CFCE;
    outline: none;
    &:focus{
      border: 1px solid #008ABF;
      transition: 0.35s ease;
      color: #008ABF;
      &::-webkit-input-placeholder{
        transition: opacity 0.45s ease; 
          opacity: 0;
       }
      &::-moz-placeholder {
        transition: opacity 0.45s ease; 
          opacity: 0;
       }
      &:-ms-placeholder {
       transition: opacity 0.45s ease; 
         opacity: 0;
       }    
     }
   }
  
  .search-icon{
    position: relative;
    float: right;
    width: 75px;
    height: 75px;
    top: -62px;
    right: -45px;
  }
  button.btn.btn-primary {
    width: 50%;
    border-radius: 0px;
    border: 1px solid white !important;
}  
`