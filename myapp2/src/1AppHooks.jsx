import React , {useState}from 'react'

const App = () => {

  const [curName, setName] = useState("");
  const [curName2, setName2] = useState("");

  const [curPass, setPass] = useState("");
  const [curPass2, setPass2] = useState("");


  const InputEvents =(event)=>{
  //console.log(event.target.value);
  setName(event.target.value);
  };
  const Onsubmits =(event)=>{
    event.preventDefault();
    setName2(curName);
    setPass2(curPass);
    };

    const InputEvents2 =(event)=>{
      //console.log(event.target.value);
      setPass(event.target.value);
      };
      

    return (
      <div className="back">
      <div className="div-center">
        <div className="content">
          <h3 className="text-center">{curName2} {curPass2} </h3>
          <hr/>
          <form onSubmit={Onsubmits}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="text" onChange={InputEvents} className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" onChange={InputEvents2} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button className="btn btn-lg btn-block btn-warning">Login</button>
            <hr/>
            <button type="button" className="btn btn-link">Signup</button>
            <button type="button" className="btn btn-link">Reset Password</button>
          </form>
        </div>
        </div>
      </div> 
    );
};

export default App
