import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './ToDoList'
import ToDoList from './ToDoList';

function App() {
    const [item, setItem]=useState("");
    const [item2, setItem2]=useState([]);
    

    const OnChanges = (event) => {
        
        setItem(event.target.value);
    }
    
    const OnSubmits = (event) => {
        //event.preventDefault();
        if (!item) return;
        setItem2((myItem)=>
        
        [...myItem, item]
        );
        setItem('');
        
    }
   
  
const deleteItems = (id) => {
    console.log("delete");
    setItem2((myItem) =>{
        return myItem.filter((arrElem, index)=>{
            // console.log("id " , id);
            // console.log("myItem ", myItem);
            // console.log("index ", index);
            // console.log("arrElem ", arrElem);
            // console.log("id !== index ", id !== index);
            return id !== index;
        })
    })
}


    return (
        <div className='back'>
            <div className='div-center'>
                <div className='content '>
                    <h3 className="text-center d-block p-2 bg-primary text-white rounded mr-0 ml-0">Todo List App </h3>
                    <hr />
                    <div className="input-group input-group-lg ">
                        <input onChange={OnChanges} 
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                OnSubmits();
                            }
                          }}
                        type="text" value={item} className="form-control border-primary " aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        <div className="input-group-prepend ">
                            <button onClick={OnSubmits}  className="btn input-group-text bg-warning border-primary" id="inputGroup-sizing-lg"><AddCircleOutlineIcon style={{ fontSize: 25 }} /></button>
                        </div>
                    </div>
                    <ul className="list-group mt-3 list-group-flush">
                        {item2.map((myItem, index)=>{
                           return <ToDoList key={index}  id={index} text={myItem}  onDelete={deleteItems} />
                        })}
                    </ul>

                </div>
            </div>
        </div>
    );
}
export default App
