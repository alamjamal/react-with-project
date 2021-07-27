import React , {useState} from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckBoxIcon from '@material-ui/icons/CheckBox';



const ToDoList = (props) => {
    const [line, setLine]=useState(false);

const changeLine = () => {
    setLine(true)
}
    return (
       <>

       
        <li className="list-group-item" >
        <input className="form-check-input " onClick={changeLine}
         type="checkbox"  id="inlineCheckbox1" value="option1" />
        
        <div className='ml-5 text-capitalize font-weight-bold line-throgh' style={{textDecoration: line ? "line-through": "none"}}>
        
        {props.text} 
        
        <a onClick={()=> {
            props.onDelete(props.id);
        }}  
        type="button" className="btn-floating btn-outline-dark float-right"> 
        <DeleteForeverIcon /></a>
        </div>
        </li>
      
       </>
    )
}

export default ToDoList
