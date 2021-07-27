import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let currTime=new Date();
currTime=currTime.getHours();
let greeting=""; //we can not use const here bcz cont can't be updated
const CSSstyle={}; //we can update object property using const 
CSSstyle.fontSize='100px';
if(currTime>1 && currTime <12){
  greeting="good morning";
  CSSstyle.color='red';
}else if( currTime > 12 && currTime <18){
  greeting="good afternoon";
  CSSstyle.color='blue';
}else{
  greeting="good evening";
  CSSstyle.color='green';
}


ReactDOM.render(
  <> 
  <h1 > Hello <span style={CSSstyle}>{greeting}</span> </h1>

  </>,
  document.getElementById('root')
);
