import React from 'react';
function Props(propobj){
    return(
    <div className="row">
    <div className="col-sm-4">
    <div className="card text-center bg-info border-light" style={{width: "300px"}}>
    <img src={propobj.srcName} ClassName="card-img-top " alt="..." style={{width:"100%"}} />
    <div ClassName="card-body ">
      <h5 className="card-title">{propobj.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="https://dummyimage.com/200x200/000/fff" className="btn btn-lg btn-warning shadow-lg rounded">Go somewhere</a>
      </div>
      </div>
      </div>
  </div>)
  ;}
  export default Props;//same as function name