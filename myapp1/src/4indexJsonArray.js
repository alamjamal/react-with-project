import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Props from './Prop'; //import props function from prop file
import PropData from  './PropArray';
import './index.css';



ReactDOM.render(
  
  <div className="row">
    <div className="col-sm-4">
  <Props  
  srcName={PropData[0].srcName} 
  title= {PropData[0].title}
  />
</div> 
 
    <div className="col-sm-4">
  <Props  srcName={PropData[1].srcName} title= {PropData[1].title} />
  </div>

  <div className="col-sm-4">
  <Props  srcName={PropData[2].srcName} title= {PropData[2].title} />
 </div>
 </div>,
document.getElementById('root'));