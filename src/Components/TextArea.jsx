import React, {useState} from 'react'

const TextArea = (props) => {

//handling any change
  const handleOnChange = (e)=>{
    const newText = e.target.value;
    setUndoStack((prevStack) => [...prevStack, text]);
    setText(newText);
    setRedoStack([]); // Clear redo stack when making a new change
    
  
  }
   //method to convert uppercase
  const handleUpperCase = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
    
  }
 
  //method to covert text to lowercase
  const handleLowerCase = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lowerCase","success")
  }

  //method to clear text
  const handleClearText = ()=>{
    setText("");
    props.showAlert("text Cleared","success");
    alert('Do you want to delete the text?');
  }

  //method to copy text to clipboard
  const handleCopy= ()=>{
    let text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to Clipboard","success")

  }
//method to remove Extra space
  const removeExtraSpace= ()=>{
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extra space removed","success")
  }

 
//method to undo change in text
  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastState = undoStack.pop();
      setRedoStack((prevStack) => [text, ...prevStack]);
      setText(lastState);
      props.showAlert("undo text","success");
    }
  };

//method to redo change in text
  const handleRedo = ()=>{
    if (redoStack.length > 0) {
      const nextState = redoStack.shift();
      setUndoStack((prevStack) => [...prevStack, text]);
      setText(nextState);
      props.showAlert("Redo text","success");
    }
  };
  
//method to reverse text
  const reverseText = ()=>{
    setText(text.split(' ').reverse().join().toString().replaceAll(',',' '));
    props.showAlert("text reversed","success")
  }


    const [text, setText] = useState('');
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
   
  return (
    <>
    <div className="container my-4" style={{color: props.mode === 'light'? '#18191A':'white'}} >
 <h2 classname = "mb-8">{props.heading}</h2>
 <div className ="mb-3">
    <textarea className ="form-control" style={{backgroundColor: props.mode === 'light'? 'white':'#18191A',color: props.mode === 'light'? 'black':'white'} }  value = {text} onChange={handleOnChange} id="textarea" rows="8" ></textarea>
</div>

<div className="container">
<button type="button" disabled = {text.length===0} className ="btn btn-primary " onClick={handleUpperCase} >Convert To Uppercase</button>
<button type="button" disabled = {text.length===0} className ="btn btn-primary mx-2" onClick={handleLowerCase}>Convert To LowerCase</button>
<button type="button" disabled = {text.length===0} className ="btn btn-danger " onClick={handleClearText}>Clear text</button>
<button type="button" disabled = {text.length===0} className ="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
<button type="button" disabled = {text.length===0} className ="btn btn-primary "onClick={handleCopy} >Copy to Clipboard</button>
<button type="button" disabled = {text.length===0} className ="btn btn-success mx-2" onClick={handleUndo}>Undo</button>
<button type="button" disabled = {text.length===0} className ="btn btn-primary " onClick={handleRedo}>Redo</button>
<button type="button" disabled = {text.length===0} className ="btn btn-primary mx-1" onClick={reverseText}>Reverse Text</button>
</div>

<div className="container my-2">
  <h2>Your text summary</h2>
  <p>{text.split(" ").filter((el)=>{ return el.length !== 0}).length} words and {text.length}  characters.</p>
  <p>{0.008 *text.split(" ").filter((el)=>{ return el.length !== 0}).length } Minutes read.</p>
  <h2>Preview</h2>
  <p>{text.length > 0 ? text : "Nothing to preview"}</p>
</div>
</div>
    </>
  )
}

export default TextArea
