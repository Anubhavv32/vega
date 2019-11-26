import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import EditImage from './components/EditImage';

export default class App extends Component {
  
  render() {
    return (
     <div>
<Router>
            <div className = "App">
        

        <Route path="/" exact component={Gallery} />
        <Route path="/edit" exact component={EditImage} />
      
        
      </div>

            </Router>
     </div> 
    )
  }
}
