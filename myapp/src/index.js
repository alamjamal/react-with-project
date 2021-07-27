import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Props from './Prop'; //import props function from prop file
import PropData from  './PropArray';
import './index.css';


// function MapData(val){
// return( 
//   <Props  
//   srcName={val.srcName}
//   title= {val.title}
//   />);
// }

ReactDOM.render(
<>
 {PropData.map((val)=>{
  return( 
  <Props  
  srcName={val.srcName}
  title= {val.title}
  />);
 })}
</>,
document.getElementById('root'));