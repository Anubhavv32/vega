import styled from 'styled-components'

export const EditStyled = styled.div`

body {
    padding: 10px 10px 10px 10px;
    font-family: "HelveticaNeue";
 }
 

 
 .myFile {
    position: relative;
    overflow: hidden;
    float: left;
    clear: left;
 }
 
 .myFile input[type="file"] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    font-size: 30px;
    filter: alpha(opacity=0);
 }
 
 .myFile2 input[type="file"] {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    font-size: 30px;
    filter: alpha(opacity=0);
 }
 
 .title {
    color: black;
    text-decoration: none;
    margin-bottom: 20px;
    display: block;
 }
 
 hr {
    text-align: left;
    margin: 30px auto 0 0;
    width: 700px;
 }
 
 a:visited {
    text-decoration: none;
    color: #000;
 }
 
 a:active {
    text-decoration: none;
    color: #000;
 }

button.btn.btn-primary {
   width: unset;
   border-radius: 2px;
   border: 1px solid white !important;
}
/* .container {
   text-align: center;
   margin-left: 30%;
} */
.container {
   margin-left: 30% !important;
   text-align: center !important;
}
.canvas-container {
   margin-left: 30% !important;
}
 canvas {
   border: none;
   margin: 10px 0px 0px 0px;
}
`